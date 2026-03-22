import Link from "next/link";
import { prisma } from "@/app/lib/prisma";
import DeleteUserBtn from "@/app/ui/DeleteUserBtn";

export default async function UserList() {
  const users = await prisma.users.findMany();

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "750px",
        margin: "0 auto",
        fontFamily: "Segoe UI, Arial, sans-serif",
        backgroundColor: "#f8fafc",
      }}
      
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        <h2 style={{ margin: 0, color: "#111827" }}>User List</h2>

        <Link href="/user/add">
          <button
            style={{
              backgroundColor: "#2563eb",
              color: "white",
              padding: "8px 14px",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: 500,
            }}
          >
            + Add User
          </button>
        </Link>
      </div>

      {/* Table */}
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          backgroundColor: "white",
          borderRadius: "6px",
          overflow: "hidden",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#e5e7eb" }}>
            <th style={thStyle}>User Name</th>
            <th style={{ ...thStyle, textAlign: "center" }}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u) => (
            <tr
              key={u.UserID}
              style={{
                borderBottom: "1px solid #e5e7eb",
              }}
            >
              <td
                style={{
                  ...tdStyle,
                  textAlign: "left",
                  color: "#111827",
                  fontWeight: 500,
                }}
              >
                {u.UserName}
              </td>

              <td style={tdStyle}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "8px",
                  }}
                >
                  <Link href={`/user/${u.UserID}`}>
                    <button
                      style={{
                        ...actionBtn,
                        backgroundColor: "#0f766e",
                      }}
                    >
                      Details
                    </button>
                  </Link>

                  <Link href={`/user/edit/${u.UserID}`}>
                    <button
                      style={{
                        ...actionBtn,
                        backgroundColor: "#16a34a",
                      }}
                    >
                      Edit
                    </button>
                  </Link>

                  <DeleteUserBtn id={u.UserID} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ---------- Styles ---------- */

const thStyle = {
  padding: "12px",
  textAlign: "left" as const,
  fontWeight: 600,
  color: "#374151",
  borderBottom: "2px solid #d1d5db",
};

const tdStyle = {
  padding: "12px",
  textAlign: "center" as const,
  color: "#374151",
};

const actionBtn = {
  color: "white",
  padding: "6px 10px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "14px",
  fontWeight: 500,
};
