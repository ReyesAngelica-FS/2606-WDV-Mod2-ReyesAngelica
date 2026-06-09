import express from "express";
import http from "http";
import cors from "cors";
import { Server } from "socket.io";
import { setupSocket } from "./socket";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
    res.send("StitchFlow Studio Socket.IO Server is running.");
});

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
});

setupSocket(io);

server.listen(PORT, () => {
    console.log(`🧵 StitchFlow Studio Server running on port ${PORT}`);
    console.log("Waiting for embroidery devices to connect...");
});