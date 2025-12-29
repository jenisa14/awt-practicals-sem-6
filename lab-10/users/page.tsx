export default async function UsersPage() {
  const res = await fetch(
    "https://https://mockapi.io/projects/67d11842825945773eb2ff37.mockapi.io/api/users",
    { cache: "no-store" }
  );

  const users = await res.json();

  return (
    <div>
      <h1>Users Get All</h1>
      {users.map((u: any) => (
        <p key={u.id}>
          {u.name} - {u.email} - {u.age}
        </p>
      ))}
    </div>
  );
}
