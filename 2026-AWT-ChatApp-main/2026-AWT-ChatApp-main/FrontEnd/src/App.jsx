import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { io } from "socket.io-client";
import { useMemo } from "react";
import { useEffect } from "react";

function App() {
  const socket = useMemo(() => io("http://10.70.16.53:3000"), []);

  useEffect(() => {
    socket.on("recvMessage", (message) => {
      let encMessage = "";
      for (let i = 0; i < message.length; i++) {
        encMessage += String.fromCharCode(message.charCodeAt(i) - 1);
      }
      setRecivedMessage(encMessage);
    });
  }, []);

  const [message, setMessage] = useState("");
  const [roomName, setRoomName] = useState("");
  const [recivedMessage, setRecivedMessage] = useState("");
  const [toId, setToId] = useState("");
  return (
    <>
      <div style={{ width: "40%", float: "left" }}>
        <h1>{socket.id}</h1>
        <h1>Message Recived = {recivedMessage}</h1>
        <input type="text" onChange={(e) => setToId(e.target.value)} />
        <input type="text" onChange={(e) => setMessage(e.target.value)} />
        <button
          onClick={() => {
            let encMessage = "";
            for (let i = 0; i < message.length; i++) {
              encMessage += String.fromCharCode(message.charCodeAt(i) + 1);
            }
            socket.emit("messageSent", { toId, encMessage });
          }}
        >
          Send
        </button>
      </div>
      <div style={{ width: "40%", float: "left" }}>
        <input type="text" onChange={(e) => setRoomName(e.target.value)} />
        <button
          onClick={() => {
            socket.emit("joinGroup", roomName);
          }}
        >
          Join
        </button>
      </div>
    </>
  );
}

export default App;
