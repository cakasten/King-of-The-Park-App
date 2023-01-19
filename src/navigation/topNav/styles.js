import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  topNav: {
    alignItems: "center",
    justifyContent: "space-between",
    width: windowWidth,
    padding: 5,
    flexDirection: "row",
    backgroundColor: '#fff'
  },
  topButton: {
    marginRight: 30,
  },
});
