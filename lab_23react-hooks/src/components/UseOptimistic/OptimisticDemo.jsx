import { useOptimistic, useState } from "react";

function OptimisticDemo() {
  const [messages, setMessages] = useState([]);

  const [optimisticMessages, addOptimistic] = useOptimistic(
    messages,
    (state, newMsg) => [...state, newMsg]
  );

  async function sendMessage(msg) {
    addOptimistic(msg);

    await new Promise((res) => setTimeout(res, 1000));

    setMessages((prev) => [...prev, msg]);
  }

  return (
    <div>
      <button onClick={() => sendMessage("Hello!")}>
        Send Message
      </button>

      <ul>
        {optimisticMessages.map((m, i) => (
          <li key={i}>{m}</li>
        ))}
      </ul>
    </div>
  );
}

export default OptimisticDemo;