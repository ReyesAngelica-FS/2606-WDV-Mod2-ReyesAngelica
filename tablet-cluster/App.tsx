import { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { io } from "socket.io-client";

interface StitchFlowState {
  connectedDevices: number;
  activeJobs: string[];
  alerts: string[];
}

const socket = io("http://localhost:3001");

export default function App() {
  const [state, setState] = useState<StitchFlowState>({
    connectedDevices: 0,
    activeJobs: [],
    alerts: [],
  });

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Tablet connected:", socket.id);
    });

    socket.on("state-update", (data: StitchFlowState) => {
      setState(data);
    });

    return () => {
      socket.off("connect");
      socket.off("state-update");
    };
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🧵 StitchFlow Tablet Dashboard</Text>
      <Text style={styles.subtitle}>Live production monitoring</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Connected Devices</Text>
        <Text style={styles.number}>{state.connectedDevices}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Active Jobs</Text>
        <Text style={styles.number}>{state.activeJobs.length}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Machine Alerts</Text>

        {state.alerts.length === 0 ? (
          <Text style={styles.emptyText}>No alerts yet.</Text>
        ) : (
          state.alerts.map((alert, index) => (
            <Text key={index} style={styles.alertText}>
              ⚠️ {alert}
            </Text>
          ))
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 30,
    backgroundColor: "#f8efe9",
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#6b2135",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: "#8a6757",
    marginBottom: 24,
  },
  card: {
    backgroundColor: "#fffaf5",
    borderRadius: 20,
    padding: 24,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: "#e6c9bc",
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#6b2135",
    marginBottom: 10,
  },
  number: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#8f2f45",
  },
  emptyText: {
    fontSize: 16,
    color: "#8a6757",
  },
  alertText: {
    fontSize: 16,
    color: "#6b2135",
    marginBottom: 8,
  },
});