import { View, Button } from "react-native";

type ControlsProps = {
    onCommand: (command: string) => void;
};

export default function Controls({ onCommand }: ControlsProps) {
    return (
        <View>
        <Button title="Start Job" onPress={() => onCommand      ("START_JOB")} />
        <Button title="Pause Job" onPress={() => onCommand("PAUSE_JOB")} />
        <Button title="Complete Job" onPress={() => onCommand("COMPLETE_JOB")} />
        </View>
    );
}