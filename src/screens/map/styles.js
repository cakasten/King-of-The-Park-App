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
    justifyContent: 'center',
    backgroundColor: "#a5e6ee",
  },
});
