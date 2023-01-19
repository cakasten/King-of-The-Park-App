import {
  Pressable,
  TextInput,
  View,
  Text,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { IntroButton } from "../../components/buttons/IntroButton";
import { Gradient } from "../../components/Gradient";
import { Logo } from "../../components/logo/Logo";
import { styles } from "../../Styles";

export const ForgotPassword = () => {
  return (
    <View style={styles.container}>
      <Gradient />
      <Logo size={'large'} />
      <TextInput
        style={styles.textInput}
        placeholder="Email:"
        keyboardType="email-address"
      />

      <IntroButton type="Submit" onPress={() => alert("Password Sent")} />
    </View>
  );
};
