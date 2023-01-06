import { View } from "react-native";
import { Gradient } from "../components/Gradient";
import { IntroButtons } from "../components/IntroButtons";
import { Logo } from "../components/Logo";
import { styles } from "../Styles";

export const Intro = () => {
  return (
    <View style={styles.container}>
      <Gradient />
      <Logo size={styles.logo.large} />
      <IntroButtons />
    </View>
  );
};
