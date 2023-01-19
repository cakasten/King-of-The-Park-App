import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
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
});
