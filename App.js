import { SafeAreaView, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { styles } from "./src/Styles";
import { Tabs } from "./src/navigation/Tabs";
import { Intro } from "./src/screens/introScreens/Intro";
import { Login } from "./src/screens/introScreens/Login";
import { SignUp } from "./src/screens/introScreens/SignUp";
import { ForgotPassword } from "./src/screens/introScreens/ForgotPassword";
import { useState } from "react";
import { Gradient } from "./src/components/Gradient";

const Stack = createStackNavigator();

export default function App() {
  const [login, setLogin] = useState(false);

  return login ? (
    <SafeAreaView style={styles.safeContainer}>
      <NavigationContainer style={styles.container}>
        <Tabs />
      </NavigationContainer>
    </SafeAreaView>
  ) : (
      <SafeAreaView style={styles.safeContainer}>
        <Gradient />
        <NavigationContainer style={styles.container}>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Intro" component={Intro} />
            <Stack.Screen
              name="Login"
              children={(props) => <Login setLogin={setLogin} />}
            />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
  );
}
