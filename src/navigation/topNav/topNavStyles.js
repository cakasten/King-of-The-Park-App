import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

export const topNavStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "start",
    top: 35,
  },
  topNav: {
    alignItems: "center",
    justifyContent: "space-between",
    width: windowWidth,
    padding: 5,
    flexDirection: "row",
  },
  topButton: {
    marginRight: 30,
  },
  mainContent: {
    height: 1000,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#7ea'
  },
});
