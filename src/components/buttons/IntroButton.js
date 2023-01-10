import { View, Pressable, Text } from "react-native";
import { styles } from "./styles";

export const IntroButton = ({ type, onPress }) => {
  const pattern = (type) => {
    switch (type) {
      case "Login":
        return styles.login;
      case "Sign up":
        return styles.signUp;
      default:
        return styles.submit;
    }
  };
  return (
    <View>
      <Pressable style={[styles, pattern(type)]} onPress={onPress}>
        <Text>{type}</Text>
      </Pressable>
    </View>
  );
};
