import { Image } from "react-native";


export const Logo = (props) => {
  return <Image style={props.size} source={require("../../assets/logo.png")} />;
};
