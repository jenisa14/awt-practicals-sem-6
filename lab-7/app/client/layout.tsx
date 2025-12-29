export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ background: "#e0f7fa", padding: "20px" }}>
      <h2>Client Area</h2>
      <hr />
      {children}
    </div>
  );
}
