"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/app/lib/prisma";
import { redirect } from "next/navigation";

export async function UpdateUserAction(formData: FormData) {
  const UserID = Number(formData.get("UserID"));
  const UserName = formData.get("UserName")?.toString();
  const Password = formData.get("Password")?.toString();

  if (!UserID || !UserName || !Password) {
    throw new Error("All fields are required");
  }

  await prisma.users.update({
    where: { UserID },
    data: {
      UserName,
      Password,
    },
  });

  revalidatePath("/user");
  redirect("/user");
}
