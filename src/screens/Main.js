import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { styles } from "../Styles";
import { Intro } from "./Intro";
import { Login } from "./Login";

const Tab = createBottomTabNavigator();

export const Main = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Intro" component={Intro} />
      <Tab.Screen name="Login" component={Login} />
    </Tab.Navigator>
  );
};
