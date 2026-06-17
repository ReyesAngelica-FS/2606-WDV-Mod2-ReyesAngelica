import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

const SERVER_URL = "http://localhost:3001";

export default function useMachineConnection() {
    const [socket, setSocket] = useState<Socket | null>(null);
    const [connected, setConnected] = useState(false);

    useEffect(() => {
        const newSocket = io(SERVER_URL);

        newSocket.on("connect", () => {
            setConnected(true);
            console.log("Mobile connected:", newSocket.id);
        });

        newSocket.on("disconnect", () => {
            setConnected(false);
        });

        setSocket(newSocket);

        return () => {
        newSocket.disconnect();
        };
    }, []);

    const sendCommand = (command: string) => {
        socket?.emit("mobile-command", command);
    };

    return {
        connected,
        sendCommand,
    };
}