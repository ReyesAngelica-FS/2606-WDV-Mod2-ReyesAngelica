import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3001");

export default function useMachineConnection() {
    const [connected, setConnected] = useState(false);
    const [state, setState] = useState({
        connectedDevices: 0,
        activeJobs: [],
        alerts: [],
    });

    useEffect(() => {
        socket.on("connect", () => {
        setConnected(true);
        });

        socket.on("disconnect", () => {
        setConnected(false);
        });

        socket.on("state-update", (data) => {
        setState(data);
        });

        return () => {
        socket.off("connect");
        socket.off("disconnect");
        socket.off("state-update");
        };
    }, []);

    const sendCommand = (command: string) => {
        socket.emit("mobile-command", command);
    };

    return {
        connected,
        state,
        sendCommand,
    };
}