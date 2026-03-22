import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(req: any) {

  if (req.nextUrl.pathname.startsWith("/api/users")) {

    const authHeader = req.headers.get("authorization");

    if (!authHeader) {
      return NextResponse.json(
        { message: "Token required" },
        { status: 401 }
      );
    }

    const token = authHeader.split(" ")[1];

    try {
      jwt.verify(token, process.env.JWT_SECRET as string);
    } catch {
      return NextResponse.json(
        { message: "Invalid or expired token" },
        { status: 401 }
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/users:path*"],
};