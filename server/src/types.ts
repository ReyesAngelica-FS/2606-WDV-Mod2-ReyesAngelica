export type MachineStatus = "idle" | "running" | "paused" | "alert" | "stopped";

export interface StitchJob {
    id: string;
    customerName: string;
    designName: string;
    machineNumber: number;
    status: MachineStatus;
    progress: number;
}

export interface StitchFlowState {
    connectedDevices: number;
    activeJobs: StitchJob[];
    alerts: string[];
    machineSpeed: number;
    threadTension: number;
    machineStatus: MachineStatus;
}