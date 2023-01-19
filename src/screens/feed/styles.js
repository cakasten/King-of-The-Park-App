import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "start",
  },
  mainContent: {
    height: 1000,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#7ea'
  },
});
