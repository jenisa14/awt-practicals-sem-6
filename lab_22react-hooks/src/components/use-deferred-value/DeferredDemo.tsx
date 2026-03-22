import { useState, useDeferredValue } from "react";

function DeferredDemo() {
  const [text, setText] = useState("");
  const deferredText = useDeferredValue(text);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type here"
      />

      <h3>Immediate Value: {text}</h3>
      <h3>Deferred Value: {deferredText}</h3>
    </div>
  );
}

export default DeferredDemo;