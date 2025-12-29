export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ background: "#f2f2f2ff", padding: "20px" }}>
      <h2>Auth Layout</h2>
      <hr />
      {children}
    </div>
  );
}
