"use client";

import DeleteUser from "../actions/DeleteUser";

export default function DeleteUserBtn({ id }: { id: number }) {
  return (
    <form action={DeleteUser} style={{ margin: 0 }}>
      <input type="hidden" name="id" value={id} />
      <button
        type="submit"
        style={{
          backgroundColor: "red",
          color: "white",
          padding: "4px 8px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Delete
      </button>
    </form>
  );
}
