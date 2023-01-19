import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: windowHeight,
  },
  safeContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  textInput: {
    height: 30,
    width: 250,
    backgroundColor: "#fff",
    borderRadius: 40,
    paddingLeft: 20,
    marginBottom: 15,
  },
});
