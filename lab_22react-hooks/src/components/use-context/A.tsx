import { MyContext } from "./MyContext";
import B from "./B";

function A() {
  return (
    <MyContext.Provider value="Hello from Component A using Context">
      <h2>Component A</h2>
      <B />
    </MyContext.Provider>
  );
}

export default A;