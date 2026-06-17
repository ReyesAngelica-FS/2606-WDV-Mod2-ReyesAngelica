import { StyleSheet, Text, View } from "react-native";

import Controls from "./src/components/Controls";
import EmergencyStop from "./src/components/EmergencyStop";
import SpeedControl from "./src/components/SpeedControl";
import ThreadControl from "./src/components/ThreadControl";
import useMachineConnection from "./src/hooks/useMachineConnection";

export default function App() {
  const { connected, sendCommand } = useMachineConnection();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🧵 StitchFlow Mobile Controls</Text>
      <Text style={styles.subtitle}>Embroidery machine operator panel</Text>

      <Text style={styles.status}>
        {connected ? "✅ Connected to server" : "❌ Not connected"}
      </Text>

      <View style={styles.card}>
        <Controls onCommand={sendCommand} />
      </View>

      <View style={styles.card}>
        <SpeedControl />
      </View>

      <View style={styles.card}>
        <ThreadControl />
      </View>

      <EmergencyStop onCommand={sendCommand} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#fff7f2",
  },
  title: {
    fontSize: 28,
    fontWeight: "900",
    color: "#6b1f3a",
  },
  subtitle: {
    fontSize: 16,
    color: "#8a6757",
    marginBottom: 12,
  },
  status: {
    fontSize: 15,
    fontWeight: "700",
    color: "#6b1f3a",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#fffaf5",
    borderColor: "#ead0c4",
    borderWidth: 1,
    borderRadius: 20,
    padding: 18,
    marginBottom: 14,
  },
});