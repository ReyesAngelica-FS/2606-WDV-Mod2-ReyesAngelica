import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { DashboardState } from "../types/dashboard";

const socket = io("http://localhost:3001");

export default function useDashboardConnection() {
    const [connected, setConnected] = useState(false);

    const [dashboardState, setDashboardState] = useState<DashboardState>({
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
                        status: data.activeJobs?.length > 0 ? "running" : "idle",
                        speed: 50,
                        tension: 5,
                        currentJob:
                        data.activeJobs?.length > 0
                            ? "StitchFlow Sample Design"
                            : "No active job",
                        progress: data.activeJobs?.length > 0 ? 45 : 0,
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