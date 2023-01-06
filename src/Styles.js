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
  button: {
    height: 75,
    width: 250,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    login: {
      backgroundColor: "#EF5E66",
    },
    signUp: {
      backgroundColor: "#61C7E8",
      marginTop: 30,
    },
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  containerSmall: {
    height: 100,
    alignItems: "center",
    justifyContent: "space-around",
  },
  form: {
    alignItems: "center",
    // backgroundColor: "red",
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
    height: 45,
    width: windowWidth * 0.8,
    backgroundColor: "#fff",
    borderRadius: 40,
    paddingLeft: 20,
    marginBottom: 30
  },
});
