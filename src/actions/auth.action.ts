"use server";

import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";
import { cookies } from "next/headers";
import {
  generateAccessToken,
  generateRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
} from "@/lib/jwt";
import { UserData, usersTable } from "@/drizzle/schemas/user.schema";
import { db } from "@/drizzle";

export async function register(userData: UserData) {
  const existingUsersList = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.username, userData.username));

  if (existingUsersList.length > 0)
    throw new Error("Username has already been registered");

  const hashedPassword = await bcrypt.hash(userData.password!, 10);

  await db
    .insert(usersTable)
    .values({ ...userData, password: hashedPassword })
    .returning();

  return { success: true };
}

export async function login(userData: Pick<UserData, "username" | "password">) {
  const existingUsersList = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.username, userData.username));

  if (existingUsersList.length === 0) throw new Error("User not found");

  const existingUser = existingUsersList[0];

  const valid = await bcrypt.compare(
    userData.password!,
    existingUser.password!,
  );

  if (!valid) throw new Error("Incorrect password");

  if (existingUser.role !== "admin")
    throw new Error("Your role still has not been changed to admin");

  const accessToken = generateAccessToken(existingUser.id);
  const refreshToken = generateRefreshToken(existingUser.id);

  const cookieStore = await cookies();

  cookieStore.set("accessToken", accessToken, {
    httpOnly: true,
    maxAge: 60 * 15,
  });

  cookieStore.set("refreshToken", refreshToken, {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 30,
  });

  return { success: true };
}

export async function logout() {
  const cookieStore = await cookies();

  cookieStore.delete("accessToken");
  cookieStore.delete("refreshToken");
}

export async function refreshTokens() {
  const cookieStore = await cookies();
  const refreshToken = cookieStore.get("refreshToken")?.value;
  if (!refreshToken) throw new Error("No refresh token");

  const decoded = verifyRefreshToken(refreshToken);
  const newAccess = generateAccessToken(decoded.userId);
  const newRefresh = generateRefreshToken(decoded.userId);

  cookieStore.set("accessToken", newAccess, {
    httpOnly: true,
    maxAge: 60 * 15,
  });

  cookieStore.set("refreshToken", newRefresh, {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7,
  });

  return { success: true };
}

export async function getCurrentUser() {
  const token = (await cookies()).get("accessToken")?.value;

  if (!token) return null;

  try {
    const decoded = verifyAccessToken(token);

    const usersList = await db
      .select({
        id: usersTable.id,
        fullName: usersTable.fullName,
        username: usersTable.username,
        createdAt: usersTable.createdAt,
        updatedAt: usersTable.updatedAt,
      })
      .from(usersTable)
      .where(eq(usersTable.id, decoded.userId));

    return usersList[0];
  } catch {
    return null;
  }
}
