import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

// GET BY ID
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const user = await prisma.users.findUnique({
    where: { UserID: Number(params.id) },
  });

  if (!user) {
    return NextResponse.json(
      { message: "User not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(user);
}

// UPDATE
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const body = await req.json();

  const updatedUser = await prisma.users.update({
    where: { UserID: Number(params.id) },
    data: {
      UserName: body.UserName,
      Password: body.Password,
    },
  });

  return NextResponse.json(updatedUser);
}

// PATCH
export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const body = await req.json();

  const updatedUser = await prisma.users.update({
    where: { UserID: Number(params.id) },
    data: body,
  });

  return NextResponse.json(updatedUser);
}

// DELETE
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  await prisma.users.delete({
    where: { UserID: Number(params.id) },
  });

  return NextResponse.json({
    message: "User deleted successfully",
  });
}