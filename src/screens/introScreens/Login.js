import { View } from "react-native";
import { Gradient } from "../../components/gradient/Gradient";
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
