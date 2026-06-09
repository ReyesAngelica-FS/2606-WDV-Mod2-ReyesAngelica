export interface StitchFlowState {
    connectedDevices: number;
    activeJobs: string[];
    alerts: string[];
}

export interface MachineAlert {
    machineId: number;
    message: string;
    timestamp: string;
}

export interface Job {
    id: string;
    name: string;
    status: "active" | "paused" | "completed";
}