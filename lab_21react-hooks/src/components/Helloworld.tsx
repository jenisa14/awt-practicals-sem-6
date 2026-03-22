import { useEffect } from "react";

function HelloWorld() {
  useEffect(() => {
    const interval: number = window.setInterval(() => {
      console.log("Hello World");
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <h2>Check Console</h2>;
}

export default HelloWorld;