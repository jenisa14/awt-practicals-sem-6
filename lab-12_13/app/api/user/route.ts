import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import { withAuth } from "@/app/lib/auth-wrapper";

export async function GET(req: NextRequest) {
  return withAuth(req, async () => {
    try {
      const users = await prisma.users.findMany();
      return NextResponse.json(users, { status: 200 });
    } catch (error) {
      return NextResponse.json(
        { message: "Failed to fetch users" },
        { status: 500 }
      );
    }
  });
}

