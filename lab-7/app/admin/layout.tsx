export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ background: "#222", color: "black", padding: "20px" }}>
      <h2>Admin Panel</h2>
      <hr />
      {children}
    </div>
  );
}
