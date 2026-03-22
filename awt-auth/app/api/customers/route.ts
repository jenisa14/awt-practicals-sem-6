import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

// GET ALL
export async function GET() {
  const customers = await prisma.customers.findMany();
  return NextResponse.json(customers);
}

// CREATE
export async function POST(req: Request) {
  const body = await req.json();

  const newCustomer = await prisma.customers.create({
    data: {
      Name: body.Name,
      Email: body.Email,
      Password: body.Password,
    },
  });

  return NextResponse.json(newCustomer);
}