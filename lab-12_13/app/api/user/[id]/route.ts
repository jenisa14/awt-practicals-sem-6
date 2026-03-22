import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import { withAuth } from "@/app/lib/auth-wrapper";

export async function GET(
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

      const user = await prisma.users.findFirst({
        where: { UserID: userId },
      });

      if (!user) {
        return NextResponse.json(
          { message: "User not found" },
          { status: 404 }
        );
      }

      return NextResponse.json(user, { status: 200 });
    } catch (error) {
      return NextResponse.json(
        { message: "Failed to fetch user" },
        { status: 500 }
      );
    }
  });
}

export async function DELETE(
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

      await prisma.users.delete({
        where: { UserID: userId },
      });

      return NextResponse.json(
        { message: "User deleted" },
        { status: 200 }
      );
    } catch (error) {
      return NextResponse.json(
        { message: "Failed to delete user" },
        { status: 500 }
      );
    }
  });
}

