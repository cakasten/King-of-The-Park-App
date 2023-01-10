import { useNavigation } from "@react-navigation/native";
import { useRef, useState } from "react";
import { TextInput, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import { IntroButton } from "../buttons/IntroButton";

export const LoginForm = () => {
  const navigation = useNavigation();
  const email = useRef();
  const password = useRef();
  const [loggedIn, setLoggedIn] = useState(false);


// Fake login function
  const handleSubmit = () => {
    loggedIn ? navigation.navigate("Main") : alert('You are not logged in.');
    setLoggedIn(!loggedIn);
  }

  return (
    <View style={styles}>
      <TextInput
        placeholder="Email:"
        keyboardType="email-address"
        style={styles.textInput}
        onSubmitEditing={() => password.current.focus()}
        ref={email}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        style={styles.textInput}
        ref={password}
      />
      <IntroButton type="Login" onPress={() => handleSubmit()} />

      <Pressable
        style={styles.link}
        onPress={() => navigation.navigate("ForgotPassword")}
      >
        <Text>Forgot Password?</Text>
      </Pressable>
      <Pressable
        style={styles.link}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text>Sign Up</Text>
      </Pressable>
    </View>
  );
};
