export interface StitchFlowState {
    connectedDevices: number;
    activeJobs: string[];
    alerts: string[];
}

export interface MachineControl {
    type: string;
    value: string | number | boolean;
}