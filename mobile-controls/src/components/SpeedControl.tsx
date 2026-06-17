import { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

interface SpeedControlProps {
    onCommand: (command: string) => void;
}

export default function SpeedControl({
    onCommand,
    }: SpeedControlProps) {
    const [speed, setSpeed] = useState(50);

    const increaseSpeed = () => {
        if (speed < 100) {
        const newSpeed = speed + 10;
        setSpeed(newSpeed);
        onCommand(`SPEED_${newSpeed}`);
        }
    };

    const decreaseSpeed = () => {
        if (speed > 0) {
        const newSpeed = speed - 10;
        setSpeed(newSpeed);
        onCommand(`SPEED_${newSpeed}`);
        }
    };

    return (
        <View>
        <Text style={styles.title}>Speed Control</Text>

        <Text style={styles.value}>{speed}%</Text>

        <View style={styles.buttonRow}>
            <Button title="- Speed" onPress={decreaseSpeed} />
            <Button title="+ Speed" onPress={increaseSpeed} />
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: "700",
        marginBottom: 10,
    },
    value: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 15,
        color: "#6b1f3a",
    },
    buttonRow: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
});