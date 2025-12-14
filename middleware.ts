import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyAccessToken } from "@/lib/jwt";
import { refreshTokens } from "@/actions/auth.action";

export default async function middleware(req: NextRequest) {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;
  const refreshToken = cookieStore.get("refreshToken")?.value;

  const publicPaths = ["/admin/login", "/admin/register"];

  const { pathname } = req.nextUrl;

  if (
    pathname === "/" ||
    publicPaths.some((prefix) => pathname.startsWith(prefix))
  )
    return NextResponse.next();

  try {
    if (!accessToken) throw new Error("Missing access token");

    verifyAccessToken(accessToken);

    return NextResponse.next();
  } catch {
    if (refreshToken) {
      try {
        await refreshTokens();
        return NextResponse.next();
      } catch {
        return NextResponse.redirect(new URL("/admin/login", req.url));
      }
    }
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|images).*)"],
};

