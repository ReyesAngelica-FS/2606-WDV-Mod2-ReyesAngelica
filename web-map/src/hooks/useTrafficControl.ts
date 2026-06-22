import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import type { WebDashboardState } from "../types/web";

const socket = io("http://localhost:3001");

export default function useTrafficControl() {
    const [connected, setConnected] = useState(false);

    const [dashboardState, setDashboardState] = useState<WebDashboardState>({
        connectedDevices: 0,
        activeJobs: 0,
        alerts: [],
        machines: [
            {
                id: 1,
                status: "idle",
                speed: 50,
                tension: 5,
                currentJob: "No active job",
                progress: 0,
            },
        ],
    });

    useEffect(() => {
            socket.on("connect", () => {
            setConnected(true);
            });

            socket.on("disconnect", () => {
            setConnected(false);
            });

            socket.on("state-update", (data) => {
            setDashboardState({
                connectedDevices: data.connectedDevices ?? 0,
                activeJobs: data.activeJobs?.length ?? 0,
                alerts: data.alerts ?? [],
                machines: [
                    {
                        id: 1,
                        status: data.machineStatus ?? "idle",
                        speed: data.machineSpeed ?? 50,
                        tension: data.threadTension ?? 5,
                        currentJob:
                        data.activeJobs?.length > 0
                            ? data.activeJobs[0].designName
                            : "No active job",
                        progress:
                        data.activeJobs?.length > 0
                            ? data.activeJobs[0].progress
                            : 0,
                    },
                ],
            });
        });

        return () => {
        socket.off("connect");
        socket.off("disconnect");
        socket.off("state-update");
        };
    }, []);

    return {
        connected,
        dashboardState,
    };
}