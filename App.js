import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
const gradientPngUri =
  "https://images.unsplash.com/photo-1604079628040-94301bb21b91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
export default function App() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: gradientPngUri }} style={styles.gradient} />
      <Text style={styles.text}>This is not my gradient.</Text>
      <StatusBar style="auto" />
      <TouchableOpacity
      onPress={()=> alert("Hello, hero!")}
      style={styles.button}
      >
        <Text style={styles.buttonTxt}> Revert your life</Text>
      </TouchableOpacity>
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
  text: {
    color: "#555",
    fontSize: 18,
    fontWeight: "normal",
  },
  gradient: {
    width: 200,
    height: 200,
    marginBottom: 40,
    borderRadius: 12,
  },
  button: {
    backgroundColor: "#AFCAE2ff",
    marginTop: 24,
    borderRadius: 8,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 24,
    paddingRight: 24
  },
  buttonTxt: {
    fontSize: 18,
    color: "#444",
 }
});
