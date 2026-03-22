import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import { withAuth } from "@/app/lib/auth-wrapper";

export async function POST(req: NextRequest) {
  return withAuth(req, async () => {
    try {
      const body = await req.json();
      const UserName = body.UserName;
      const Password = body.Password;

      if (!UserName || !Password) {
        return NextResponse.json(
          { message: "UserName and Password required" },
          { status: 400 }
        );
      }

      const newUser = await prisma.users.create({
        data: {
          UserName,
          Password,
        },
      });

      return NextResponse.json(newUser, { status: 201 });
    } catch (error) {
      return NextResponse.json(
        { message: "Failed to create user" },
        { status: 500 }
      );
    }
  });
}

