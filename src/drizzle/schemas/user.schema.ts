import { pgEnum, pgTable, text } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { projectsTable } from "@/drizzle/schemas/project.schema";
import { id, createdAt, updatedAt } from "@/drizzle";

export const roleEnum = pgEnum("role", ["user", "admin"]);

export const usersTable = pgTable("users", {
  id,
  fullName: text("full_name").notNull(),
  username: text("username").notNull().unique(),
  role: roleEnum("role").default("user"),
  password: text("password").notNull(),
  createdAt,
  updatedAt,
});

export const userRelations = relations(usersTable, ({ many }) => ({
  projects: many(projectsTable),
}));

export type UserData = typeof usersTable.$inferInsert;
export type User = Omit<typeof usersTable.$inferSelect, "role" | "password">;
