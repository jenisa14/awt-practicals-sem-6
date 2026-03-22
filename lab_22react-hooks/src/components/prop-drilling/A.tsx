import B from "./B";

function A() {
  const message = "Hello from Component A";

  return (
    <div>
      <h2>Component A</h2>
      <B message={message} />
    </div>
  );
}

export default A;