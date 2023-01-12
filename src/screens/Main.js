import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { styles } from "../Styles";
import { Login } from "./Login";
import { Feed } from "../components/feed/Feed";

const Tab = createBottomTabNavigator();

export const Main = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Login" component={Login} />
    </Tab.Navigator>
  );
};
