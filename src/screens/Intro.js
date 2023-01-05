import { View, Text, Pressable } from "react-native";
import { Gradient } from "../components/Gradient";
import { Logo } from "../components/Logo";
import { styles } from "../Styles";



export const Intro = () => {
  return (
    <View style={styles.container}>
      <Gradient />
      <Logo styles={styles.logo.large} />
      <View>
      <Pressable style={styles.button.login}>
        <Text>Login</Text>
      </Pressable>
      <Pressable style={styles.button.signUp}>
        <Text>Sign Up</Text>
      </Pressable>
      </View>
    </View>
  );
};
