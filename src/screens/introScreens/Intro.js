import { View } from "react-native";
import { IntroButton } from "../../components/buttons/IntroButton";
import { Gradient } from "../../components/gradient/Gradient";
import { Logo } from "../../components/logo/Logo";
import { styles } from "../../Styles";

export const Intro = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Gradient />
      <Logo size={'large'} />
      <View>
        <IntroButton
          type="Login"
          onPress={() => navigation.navigate("Login")}
        />
        <IntroButton
          type="Sign Up"
          onPress={() => navigation.navigate("SignUp")}
        />
      </View>
    </View>
  );
};
