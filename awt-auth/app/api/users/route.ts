import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

// GET ALL USERS
export async function GET() {
  const users = await prisma.users.findMany();
  return NextResponse.json(users);
}

// CREATE USER
export async function POST(req: Request) {
  const body = await req.json();

  const newUser = await prisma.users.create({
    data: {
      UserName: body.UserName,
      Password: body.Password,
    },
  });

  return NextResponse.json(newUser);
}