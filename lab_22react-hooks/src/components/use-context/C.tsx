import { useContext } from "react";
import { MyContext } from "./MyContext";

function C() {
  const message = useContext(MyContext);

  return (
    <div>
      <h2>Component C</h2>
      <p>{message}</p>
    </div>
  );
}

export default C;