import { TextInput, View, Pressable } from "react-native";
import { styles } from "../Styles";

export const SignUpForm = () => {
  return (
    <View style={styles.form}>
      <TextInput placeholder="Username:" style={styles.textInput} />
      <TextInput placeholder="Email:" keyboardType="email-address" style={styles.textInput} />
      <TextInput placeholder="Password" secureTextEntry={true} style={styles.textInput} />
      <TextInput placeholder="Re-enter Password:" secureTextEntry={true} style={styles.textInput} />
    </View>
  );
};
