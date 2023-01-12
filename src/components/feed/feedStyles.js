import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const feedStyles = {
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
  thing: {
    width: 55,
    height: 55,
    marginRight: 20,
    backgroundColor: "blue",
  },
  mainContent: {
    height: 1000,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#7ea'
  },
};
