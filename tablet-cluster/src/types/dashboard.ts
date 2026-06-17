export interface MachineData {
    id: number;
    status: "idle" | "running" | "paused" | "alert";
    speed: number;
    tension: number;
    currentJob: string;
    progress: number;
}
export interface DashboardState {
    connectedDevices: number;
    activeJobs: number;
    alerts: string[];
    machines: MachineData[];
}
