import { AddUserAction } from "@/app/actions/AddUserAction";
import Link from "next/link";

export default function AddUserPage() {
  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "450px",
        margin: "40px auto",
        fontFamily: "Segoe UI, Arial, sans-serif",
        backgroundColor: "#f8fafc",
      }}
    >
      {/* Card */}
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
        }}
      >
        <h2
          style={{
            marginBottom: "20px",
            color: "#111827",
            textAlign: "center",
          }}
        >
          Add User
        </h2>

        <form action={AddUserAction}>
          {/* Username */}
          <div style={{ marginBottom: "15px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "6px",
                color: "#374151",
                fontWeight: 500,
              }}
            >
              User Name
            </label>
            <input
              type="text"
              name="UserName"
              required
              placeholder="Enter username"
              style={inputStyle}
            />
          </div>

          {/* Password */}
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "6px",
                color: "#374151",
                fontWeight: 500,
              }}
            >
              Password
            </label>
            <input
              type="password"
              name="Password"
              required
              placeholder="Enter password"
              style={inputStyle}
            />
          </div>

          {/* Buttons */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Link href="/user">
              <button
                type="button"
                style={{
                  backgroundColor: "#e5e7eb",
                  color: "#111827",
                  padding: "8px 14px",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
            </Link>

            <button
              type="submit"
              style={{
                backgroundColor: "#2563eb",
                color: "white",
                padding: "8px 16px",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: 500,
              }}
            >
              Save User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
const inputStyle = {
  width: "100%",
  padding: "8px 10px",
  border: "1px solid #d1d5db",
  borderRadius: "6px",
  fontSize: "14px",
  outline: "none",
  color: "#111827",        
  backgroundColor: "#fff",
};
