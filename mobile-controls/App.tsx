import { View, Text } from "react-native";

import Controls from "./src/components/Controls";
import EmergencyStop from "./src/components/EmergencyStop";
import SpeedControl from "./src/components/SpeedControl";
import ThreadControl from "./src/components/ThreadControl";

export default function App() {
  return (
    <View style={{ padding: 20 }}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        StitchFlow Mobile Controls
      </Text>

      <Controls />

      <EmergencyStop />

      <SpeedControl />

      <ThreadControl />
    </View>
  );
}