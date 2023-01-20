import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "start",
  },
  mainContent: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ff6688",
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    width: windowWidth,
    textAlign: "center",
  },
});
