import { LinearGradient } from "expo-linear-gradient";
import { styles } from "../Styles";

export const Gradient = () => {
  return (
    <LinearGradient
      colors={["#96E5FF", "#D6EEF6"]}
      style={styles.background}
    ></LinearGradient>
  );
};
