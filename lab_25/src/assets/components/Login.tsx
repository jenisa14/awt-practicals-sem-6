import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";


function Login() {
  const auth = useContext(AuthContext);
  const [name, setName] = useState("");

  if (!auth) return null;

  return (
    <div>
      <h2>Login</h2>

      <input
        type="text"
        placeholder="Enter username"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={() => auth.login(name)}>Login</button>
    </div>
  );
}

export default Login;