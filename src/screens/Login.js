import { Pressable, Text, View } from "react-native";
import { Gradient } from "../components/Gradient";
import { LoginForm } from "../components/LoginForm";
import { Logo } from "../components/Logo";
import { styles } from "../Styles";

export const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Gradient />
      <Logo size={styles.logo.large} />
      <LoginForm />
      <View style={styles.containerSmall}>
        <Pressable onPress={() => navigation.navigate("SignUp")}>
          <Text>Sign Up</Text>
        </Pressable>
        <Pressable onPress={() => alert("Make password page!")}>
          <Text>Forgot Password?</Text>
        </Pressable>
      </View>
    </View>
  );
};
