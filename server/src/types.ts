export type MachineStatus = "idle" | "running" | "paused" | "alert";

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
}