import { View } from "react-native";
import { IntroButton } from "../../components/buttons/IntroButton";
import { Gradient } from "../../components/Gradient";
import { Logo } from "../../components/Logo";
import { styles } from "../../Styles";

export const Intro = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Gradient />
      <Logo size={styles.logo.large} />

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
