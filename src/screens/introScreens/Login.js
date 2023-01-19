import { Pressable, Text, View } from "react-native";
import { IntroButton } from "../../components/buttons/IntroButton";
import { Gradient } from "../../components/Gradient";
import { LoginForm } from "../../components/loginForm/LoginForm";
import { Logo } from "../../components/logo/Logo";
import { styles } from "../../Styles";

export const Login = ({ setLogin }) => {
  return (
    <View style={styles.container}>
      <Gradient />
      <Logo size={'large'} />
      <LoginForm setLogin={setLogin} />
    </View>
  );
};
