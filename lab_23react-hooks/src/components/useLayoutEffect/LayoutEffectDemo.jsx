import { useLayoutEffect, useRef, useState } from "react";

function LayoutEffectDemo() {
  const boxRef = useRef(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    setWidth(boxRef.current.offsetWidth);
  }, []);

  return (
    <div>
      <div
        ref={boxRef}
        style={{ width: "200px", height: "50px", background: "lightblue" }}
      />
      <p>Box width: {width}px</p>
    </div>
  );
}

export default LayoutEffectDemo;