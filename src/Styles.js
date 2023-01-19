import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
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
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  logo: {
    small: {
      width: windowWidth * 0.2,
      height: windowWidth * 0.2,
    },
    medium: {
      width: windowWidth * 0.5,
      height: windowWidth * 0.5,
    },
    large: {
      width: windowWidth * 0.85,
      height: windowWidth * 0.85,
    },
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
