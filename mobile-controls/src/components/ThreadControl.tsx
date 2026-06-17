import { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

interface ThreadControlProps {
  onCommand: (command: string) => void;
}

export default function ThreadControl({
    onCommand,
    }: ThreadControlProps) {
    const [tension, setTension] = useState(5);

    const increaseTension = () => {
        if (tension < 10) {
        const newTension = tension + 1;
        setTension(newTension);
        onCommand(`TENSION_${newTension}`);
        }
    };

    const decreaseTension = () => {
        if (tension > 1) {
        const newTension = tension - 1;
        setTension(newTension);
        onCommand(`TENSION_${newTension}`);
        }
    };

    return (
        <View>
        <Text style={styles.title}>Thread Tension Control</Text>

        <Text style={styles.value}>{tension}</Text>

        <View style={styles.buttonRow}>
            <Button title="- Tension" onPress={decreaseTension} />
            <Button title="+ Tension" onPress={increaseTension} />
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