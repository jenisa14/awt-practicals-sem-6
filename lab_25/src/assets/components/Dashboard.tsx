import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";


function Dashboard() {
  const auth = useContext(AuthContext);

  if (!auth) return null;

  return (
    <div>
      <h2>Welcome {auth.user}</h2>

      <button onClick={auth.logout}>Logout</button>
    </div>
  );
}

export default Dashboard;