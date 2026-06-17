import { StyleSheet, Text, View } from "react-native";
import useDashboardConnection from "./src/hooks/useDashboardConnection";

export default function App() {
  const { connected, dashboardState } = useDashboardConnection();
  const machine = dashboardState.machines[0];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🧵 StitchFlow Tablet Dashboard</Text>
      <Text style={styles.subtitle}>Live production monitoring</Text>

      <Text style={styles.status}>
        {connected ? "✅ Connected to server" : "❌ Not connected"}
      </Text>

      <View style={styles.grid}>
        <View style={styles.card}>
          <Text style={styles.number}>{dashboardState.connectedDevices}</Text>
          <Text style={styles.label}>Connected Devices</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.number}>{dashboardState.activeJobs}</Text>
          <Text style={styles.label}>Active Jobs</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.number}>{dashboardState.alerts.length}</Text>
          <Text style={styles.label}>Machine Alerts</Text>
        </View>
      </View>

      <View style={styles.machineCard}>
        <Text style={styles.sectionTitle}>Machine 1 Status</Text>

        <Text style={styles.machineText}>Status: {machine.status}</Text>
        <Text style={styles.machineText}>Speed: {machine.speed}%</Text>
        <Text style={styles.machineText}>Thread Tension: {machine.tension}</Text>
        <Text style={styles.machineText}>Current Job: {machine.currentJob}</Text>
        <Text style={styles.machineText}>Progress: {machine.progress}%</Text>
      </View>

      <View style={styles.alertCard}>
        <Text style={styles.sectionTitle}>Recent Alerts</Text>

        {dashboardState.alerts.length === 0 ? (
          <Text style={styles.machineText}>No alerts yet.</Text>
        ) : (
          dashboardState.alerts.slice(-3).map((alert, index) => (
            <Text key={index} style={styles.alertText}>
              ⚠️ {alert}
            </Text>
          ))
        )}
      </View>
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
    fontSize: 30,
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
  grid: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 20,
  },
  card: {
    flex: 1,
    backgroundColor: "#fffaf5",
    borderColor: "#ead0c4",
    borderWidth: 1,
    borderRadius: 18,
    padding: 20,
    alignItems: "center",
  },
  number: {
    fontSize: 36,
    fontWeight: "900",
    color: "#6b1f3a",
  },
  label: {
    fontSize: 14,
    color: "#4a2a2a",
    marginTop: 4,
  },
  machineCard: {
    backgroundColor: "#fffaf5",
    borderColor: "#ead0c4",
    borderWidth: 1,
    borderRadius: 18,
    padding: 20,
    marginBottom: 16,
  },
  alertCard: {
    backgroundColor: "#fffaf5",
    borderColor: "#ead0c4",
    borderWidth: 1,
    borderRadius: 18,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#6b1f3a",
    marginBottom: 10,
  },
  machineText: {
    fontSize: 16,
    marginBottom: 6,
    color: "#3a2a2a",
  },
  alertText: {
    fontSize: 16,
    marginBottom: 6,
    color: "#b00020",
  },
});