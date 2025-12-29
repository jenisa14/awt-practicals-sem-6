export const dynamic = "force-dynamic";

async function getUser(id: string) {
  const res = await fetch(
    `https://67d11842825945773eb2ff36.mockapi.io/api/users/${id}`,
    { cache: "no-store" }
  );
  return res.json();
}

export default async function UserById({
  params,
}: {
  params: { id: string };
}) {
  const user = await getUser(params.id);

  if (Object.keys(user).length === 0) {
    return <h2>User not found</h2>;
  }

  return (
    <div>
      <h1>User Detail</h1>
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
    </div>
  );
}
