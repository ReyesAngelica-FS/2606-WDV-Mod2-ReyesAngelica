export interface MachineData {
    id: number;
    status: string;
    speed: number;
    tension: number;
    currentJob: string;
    progress: number;
}

export interface WebDashboardState {
    connectedDevices: number;
    activeJobs: number;
    alerts: string[];
    machines: MachineData[];
}