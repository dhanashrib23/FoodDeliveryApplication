import { StyleSheet, Text, View } from "react-native";
import Launcher from "./components/Launcher";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Launcher></Launcher> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
