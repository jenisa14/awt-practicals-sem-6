"use server";

import { prisma } from "../lib/prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function AddUserAction(formData: FormData) {
  const UserName = formData.get("UserName")?.toString();
  const Password = formData.get("Password")?.toString();

  if (!UserName || !Password) {
    throw new Error("UserName and Password required");
  }

  await prisma.users.create({
    data: { UserName, Password },
  });

  revalidatePath("/user");
  redirect("/user");
}
