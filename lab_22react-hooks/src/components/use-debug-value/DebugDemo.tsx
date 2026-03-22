import useOnlineStatus from "./useOnlineStatus";

function DebugDemo() {
  const isOnline = useOnlineStatus();

  return <h2>User is {isOnline ? "Online" : "Offline"}</h2>;
}

export default DebugDemo;