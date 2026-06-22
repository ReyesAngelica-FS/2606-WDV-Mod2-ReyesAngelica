import { Server, Socket } from "socket.io";
import { StitchFlowState } from "./types";

const stitchFlowState: StitchFlowState = {
    connectedDevices: 0,
    activeJobs: [],
    alerts: [],

    machineSpeed: 50,
    threadTension: 5,
    machineStatus: "idle",
};

function emitUpdates(io: Server) {
    io.emit("state-update", stitchFlowState);

    io.emit("dashboard-update", {
        connectedDevices: stitchFlowState.connectedDevices,
        activeJobs: stitchFlowState.activeJobs.length,
        alerts: stitchFlowState.alerts,
        machines: [
            {
                id: 1,
                status: stitchFlowState.machineStatus,
                speed: stitchFlowState.machineSpeed,
                tension: stitchFlowState.threadTension,
                currentJob:
                stitchFlowState.activeJobs.length > 0
                    ? stitchFlowState.activeJobs[0].designName
                    : "No active job",
                progress:
                stitchFlowState.activeJobs.length > 0
                    ? stitchFlowState.activeJobs[0].progress
                    : 0,
            },
        ],
    });
}

export function setupSocket(io: Server) {
    io.on("connection", (socket: Socket) => {
        stitchFlowState.connectedDevices += 1;

        console.log(`Client connected: ${socket.id}`);
        emitUpdates(io);

        socket.on("mobile-command", (command: string) => {
        console.log(`📱 Mobile Command: ${command}`);

            switch (command) {
                case "START_JOB":
                stitchFlowState.machineStatus = "running";

                stitchFlowState.activeJobs = [
                    {
                    id: Date.now().toString(),
                    customerName: "Demo Customer",
                    designName: "StitchFlow Sample Design",
                    machineNumber: 1,
                    status: "running",
                    progress: 45,
                    },
                ];

                break;

                case "PAUSE_JOB":
                stitchFlowState.machineStatus = "paused";
                console.log("⏸ Job Paused");
                break;

                case "COMPLETE_JOB":
                stitchFlowState.machineStatus = "idle";
                stitchFlowState.activeJobs = [];
                console.log("✅ Job Completed");
                break;

                case "EMERGENCY_STOP":
                stitchFlowState.machineStatus = "stopped";
                stitchFlowState.alerts.push("Emergency Stop Activated");
                console.log("🚨 EMERGENCY STOP ACTIVATED");
                break;

                default:
                if (command.startsWith("SPEED_")) {
                    const speed = Number(command.replace("SPEED_", ""));
                    stitchFlowState.machineSpeed = speed;
                    stitchFlowState.alerts.push(`Speed changed to ${speed}%`);
                    console.log(`⚙️ Speed Changed: ${speed}%`);
                }

                if (command.startsWith("TENSION_")) {
                    const tension = Number(command.replace("TENSION_", ""));
                    stitchFlowState.threadTension = tension;
                    stitchFlowState.alerts.push(`Thread tension changed to ${tension}`);
                    console.log(`🧵 Thread Tension Changed: ${tension}`);
                }

                break;
            }

            emitUpdates(io);
        });

        socket.on("machine-alert", (message: string) => {
            stitchFlowState.alerts.push(message);

            console.log(`Alert received: ${message}`);
            emitUpdates(io);
        });

            socket.on("disconnect", () => {
            stitchFlowState.connectedDevices -= 1;

            console.log(`Client disconnected: ${socket.id}`);
            emitUpdates(io);
        });
    });
}