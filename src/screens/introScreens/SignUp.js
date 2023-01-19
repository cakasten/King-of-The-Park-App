import { View } from "react-native";
import { Gradient } from "../../components/Gradient";
import { Logo } from "../../components/logo/Logo";
import { SignUpForm } from "../../components/signUpForm/SignUpForm";
import { styles } from "../../Styles";

export const SignUp = () => {
  return (
    <View style={styles.container}>
      <Gradient />
      <Logo size={'medium'} />
      <SignUpForm />
    </View>
  );
};
