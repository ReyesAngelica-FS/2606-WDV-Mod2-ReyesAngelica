import { Button } from "react-native";

type EmergencyStopProps = {
    onCommand: (command: string) => void;
};

export default function EmergencyStop({ onCommand }: EmergencyStopProps) {
    return (
        <Button
        title="EMERGENCY STOP"
        color="red"
        onPress={() => onCommand("EMERGENCY_STOP")}
        />
    );
}