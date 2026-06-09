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