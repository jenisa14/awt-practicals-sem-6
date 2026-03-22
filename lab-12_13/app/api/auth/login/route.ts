import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import { signToken } from "@/app/lib/jwt";

export async function POST(req: NextRequest) {
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

    const user = await prisma.users.findFirst({
      where: { UserName, Password },
    });

    if (!user) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }

    const token = signToken({
      UserID: user.UserID,
      UserName: user.UserName,
    });

    return NextResponse.json({ token }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

