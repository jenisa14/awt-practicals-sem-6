import { useState, useDebugValue } from "react";

function useOnlineStatus() {
  const [isOnline] = useState(true);

  useDebugValue(isOnline ? "Online" : "Offline");

  return isOnline;
}

export default useOnlineStatus;


