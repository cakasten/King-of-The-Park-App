import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Intro } from "./src/screens/Intro";
import { Login } from "./src/screens/Login";
import { SignUp } from "./src/screens/SignUp";
import { ForgotPassword } from "./src/screens/ForgotPassword";
import { Main } from "./src/screens/Main";
import { useState } from "react";

const Stack = createStackNavigator();

export default function App() {
  const [login, setLogin] = useState(false);

  return login ? (
    <NavigationContainer style={styles.container}>
      <Main />
    </NavigationContainer>
  ) : (
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
