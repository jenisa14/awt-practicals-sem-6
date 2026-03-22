import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import { withAuth } from "@/app/lib/auth-wrapper";

export async function PUT(
  req: NextRequest,
  context: { params: { id: string } }
) {
  return withAuth(req, async () => {
    try {
      const userId = Number(context.params.id);

      if (Number.isNaN(userId)) {
        return NextResponse.json(
          { message: "Invalid id" },
          { status: 400 }
        );
      }

      const body = await req.json();
      const UserName = body.UserName;
      const Password = body.Password;

      if (!UserName || !Password) {
        return NextResponse.json(
          { message: "UserName and Password required" },
          { status: 400 }
        );
      }

      const updated = await prisma.users.update({
        where: { UserID: userId },
        data: {
          UserName,
          Password,
        },
      });

      return NextResponse.json(updated, { status: 200 });
    } catch (error) {
      return NextResponse.json(
        { message: "Failed to update user" },
        { status: 500 }
      );
    }
  });
}

export async function PATCH(
  req: NextRequest,
  context: { params: { id: string } }
) {
  return withAuth(req, async () => {
    try {
      const userId = Number(context.params.id);

      if (Number.isNaN(userId)) {
        return NextResponse.json(
          { message: "Invalid id" },
          { status: 400 }
        );
      }

      const body = await req.json();
      const data: any = {};

      if (body.UserName !== undefined) {
        data.UserName = body.UserName;
      }
      if (body.Password !== undefined) {
        data.Password = body.Password;
      }

      const updated = await prisma.users.update({
        where: { UserID: userId },
        data,
      });

      return NextResponse.json(updated, { status: 200 });
    } catch (error) {
      return NextResponse.json(
        { message: "Failed to patch user" },
        { status: 500 }
      );
    }
  });
}

