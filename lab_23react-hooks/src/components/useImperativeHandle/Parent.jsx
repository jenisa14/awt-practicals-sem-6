import { useRef } from "react";
import Child from "./Child";

function Parent() {
  const childRef = useRef(null);

  return (
    <div>
      <Child ref={childRef} />
      <button onClick={() => childRef.current.focusInput()}>
        Focus Child Input
      </button>
    </div>
  );
}

export default Parent;