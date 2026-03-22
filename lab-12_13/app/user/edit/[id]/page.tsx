import { prisma } from "@/app/lib/prisma";
import { UpdateUserAction } from "@/app/actions/UpdateUserAction";
import Link from "next/link";

export default async function EditUserPage({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
 
  const { id } = await params;

  const userId = Number(id);

  if (Number.isNaN(userId)) {
    return <h2 className="text-white text-center mt-10">Invalid User ID</h2>;
  }


  const user = await prisma.users.findUnique({
    where: {
      UserID: userId,
    },
  });

  if (!user) {
    return <h2 className="text-white text-center mt-10">User not found</h2>;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70">
      <div className="w-full max-w-md rounded-xl bg-zinc-900 p-6 shadow-2xl">
        
        <h2 className="mb-6 text-center text-2xl font-semibold text-white">
          Edit User
        </h2>

        <form action={UpdateUserAction} className="space-y-4">
          {/* Hidden ID */}
          <input type="hidden" name="UserID" value={user.UserID} />

          <input
            type="text"
            name="UserName"
            defaultValue={user.UserName}
            placeholder="User Name"
            className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-4 py-2 text-white placeholder-zinc-400 focus:border-blue-500 focus:outline-none"
            required
          />

          <input
            type="password"
            name="Password"
            placeholder="New Password"
            className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-4 py-2 text-white placeholder-zinc-400 focus:border-blue-500 focus:outline-none"
          />

          <div className="mt-6 flex justify-between">
            <Link
              href="/user"
              className="rounded-md bg-zinc-700 px-4 py-2 text-white hover:bg-zinc-600"
            >
              Cancel
            </Link>

            <button
              type="submit"
              className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-500"
            >
              Update
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
