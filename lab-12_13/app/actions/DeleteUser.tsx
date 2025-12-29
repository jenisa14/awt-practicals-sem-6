"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "../lib/prisma";
import { redirect } from "next/navigation";

export default async function DeleteUser(formData: FormData) {
  const id = Number(formData.get("id"));

    await prisma.users.delete(

        {

            where:{UserID : id}
        }
    );
    revalidatePath("/user")
    redirect("/user")
}