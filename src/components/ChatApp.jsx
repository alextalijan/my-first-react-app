import { useState, useEffect } from "react";
import { createConnection } from "./chat"; // pretend function

export default function ChatApp({ roomId }) {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const conn = createConnection(roomId);
    conn.connect(() => setIsConnected(true));

    return () => {
      conn.disconnect();
      setIsConnected(false);
    }
  }, [roomId]);

  return <h1>{isConnected ? "Connected" : "Disconnected"}</h1>;
}
