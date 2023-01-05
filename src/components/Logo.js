import { Image, View } from "react-native";


export const Logo = (props) => {
  return <Image style={props.styles} source={require("../../assets/logo.png")} />;
};
