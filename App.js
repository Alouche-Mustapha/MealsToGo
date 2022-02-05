import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={{ padding: 15, backgroundColor: "red" }}>
          <Text>Search</Text>
        </View>
        <View style={{ flex: 1, padding: 15, backgroundColor: "green" }}>
          <Text style={{ color: "white" }}>Starting here : </Text>
        </View>
      </SafeAreaView>
      <StatusBar backgroundColor={"gray"} style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
  },
});
