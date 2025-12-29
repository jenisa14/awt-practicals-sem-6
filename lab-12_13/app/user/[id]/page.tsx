import { prisma } from "@/app/lib/prisma";
import Link from "next/link";
import DeleteUserBtn from "@/app/ui/DeleteUserBtn";

export default async function Details({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const user = await prisma.users.findFirst({
    where: {
      UserID: Number(id),
    },
  });

  return (
    <>
      <h2>User Details</h2>
      <br></br>
      <br></br>

      <table border={1} cellPadding={10} style={{ borderCollapse: "collapse" }}>
        <tbody>
          <tr>
        
            <th><h3>User Name:</h3></th>
            <td><h2>{user?.UserName}</h2></td>
          </tr>
        </tbody>
      </table>

      <br />

      <div style={{ display: "flex", gap: "10px" }}>
        <Link href="/user">
          <button>Back</button>
        </Link>

        <DeleteUserBtn id={Number(id)} />
      </div>
    </>
  );
}
