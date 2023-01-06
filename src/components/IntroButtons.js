import { View, Pressable, Text } from "react-native";
import { styles } from "../Styles";
import { useNavigation } from "@react-navigation/native";

export const IntroButtons = () => {
    const navigation = useNavigation();
  return (
    <View>
      <Pressable
        style={[styles.button, styles.button.login]}
        onPress={() => navigation.navigate("Login")}
      >
        <Text>Login</Text>
      </Pressable>
      <Pressable
        style={[styles.button, styles.button.signUp]}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text>Sign Up</Text>
      </Pressable>
    </View>
  );
};
