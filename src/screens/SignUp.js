import { View } from "react-native";
import { Gradient } from "../components/Gradient";
import { Logo } from "../components/Logo";
import { SignUpForm } from "../components/signUpForm/SignUpForm";
import { styles } from "../Styles";

export const SignUp = () => {
  return (
    <View style={styles.container}>
      <Gradient />
      <Logo size={styles.logo.large} />
      <SignUpForm />
    </View>
  );
};
