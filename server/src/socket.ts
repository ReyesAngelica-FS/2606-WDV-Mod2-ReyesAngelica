import { Server, Socket } from "socket.io";
import { StitchFlowState } from "./types";

const stitchFlowState: StitchFlowState = {
    connectedDevices: 0,
    activeJobs: [],
    alerts: [],
};

export function setupSocket(io: Server) {
    io.on("connection", (socket: Socket) => {
        stitchFlowState.connectedDevices += 1;

        console.log(`Client connected: ${socket.id}`);
        io.emit("state-update", stitchFlowState);

        // Mobile app commands
        socket.on("mobile-command", (command: string) => {
        console.log(`📱 Mobile Command: ${command}`);

        switch (command) {
            case "START_JOB":
                stitchFlowState.activeJobs.push({
                        id: Date.now().toString(),
                        customerName: "Demo Customer",
                        designName: "StitchFlow Sample Design",
                        machineNumber: 1,
                        status: "running",
                        progress: 0,
                    });
            break;

            case "PAUSE_JOB":
                console.log("⏸ Job Paused");
            break;

            case "COMPLETE_JOB":
                stitchFlowState.activeJobs = [];
                console.log("✅ Job Completed");
            break;

            case "EMERGENCY_STOP":
                console.log("🚨 EMERGENCY STOP ACTIVATED");
                stitchFlowState.alerts.push("Emergency Stop Activated");
            break;

            default:
                if (command.startsWith("SPEED_")) {
                    const speed = Number(command.replace("SPEED_", ""));
                    console.log(`⚙️ Speed Changed: ${speed}%`);

                    stitchFlowState.alerts.push(`Speed changed to ${speed}%`);
                }

                if (command.startsWith("TENSION_")) {
                    const tension = Number(command.replace("TENSION_", ""));
                    console.log(`🧵 Thread Tension Changed: ${tension}`);

                    stitchFlowState.alerts.push(`Thread tension changed to ${tension}`);
                }

            break;
        }

        io.emit("state-update", stitchFlowState);
        });

        socket.on("machine-alert", (message: string) => {
        stitchFlowState.alerts.push(message);

        io.emit("state-update", stitchFlowState);

        console.log(`Alert received: ${message}`);
        });

        socket.on("disconnect", () => {
        stitchFlowState.connectedDevices -= 1;

        console.log(`Client disconnected: ${socket.id}`);

        io.emit("state-update", stitchFlowState);
        });
    });
}