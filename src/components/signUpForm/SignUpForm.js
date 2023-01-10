import { useNavigation } from "@react-navigation/native";
import {
  TextInput,
  ScrollView,
  View,
  Text,
  Pressable,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { styles } from "./styles";
// import { styles } from "../../Styles";
import { useRef } from "react";
import { IntroButton } from "../buttons/IntroButton";

export const SignUpForm = () => {
  const navigation = useNavigation();
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const password2 = useRef();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ alignItems: "center" }}
    >
      <View style={styles}>
        <TextInput
          placeholder="Username:"
          style={styles.textInput}
          onSubmitEditing={() => email.current.focus()}
          ref={username}
          clearTextOnFocus={true}
        />
        <TextInput
          placeholder="Email:"
          keyboardType="email-address"
          style={styles.textInput}
          onSubmitEditing={() => password.current.focus()}
          ref={email}
          clearTextOnFocus={true}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={styles.textInput}
          onSubmitEditing={() => password2.current.focus()}
          ref={password}
          clearTextOnFocus={true}
        />
        <TextInput
          placeholder="Re-enter Password:"
          secureTextEntry={true}
          style={styles.textInput}
          ref={password2}
          clearTextOnFocus={true}
        />
        <IntroButton type="Submit" onPress={() => alert("Account made!")} />
      </View>

      <Pressable
        style={styles.link}
        onPress={() => navigation.navigate("Login")}
      >
        <Text>Login</Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
};
