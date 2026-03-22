import { useState, useCallback } from "react";

type ChildProps = {
  onClick: () => void;
};

function Child({ onClick }: ChildProps) {
  console.log("Child rendered");
  return <button onClick={onClick}>Child Button</button>;
}

function UseCallbackDemo() {
  const [count, setCount] = useState<number>(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment Count
      </button>

      <Child onClick={handleClick} />
    </div>
  );
}

export default UseCallbackDemo;