import { Image } from "react-native";
import { styles } from "./styles";


export const Logo = (props) => {
  return <Image style={styles.logo[props.size]} source={require("../../../assets/logo.png")} />;
};
