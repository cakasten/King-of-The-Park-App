import { useNavigation } from "@react-navigation/native";
import { View, TextInput, Pressable, Text } from "react-native";
import { styles } from "../Styles";

export const LoginForm = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.form}>
      <TextInput
        placeholder="Email:"
        keyboardType="email-address"
        style={styles.textInput}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        style={styles.textInput}
      />
      <Pressable
        style={[styles.button, styles.button.login]}
        onPress={() => alert("Make feed page!")}
      >
        <Text>Login</Text>
      </Pressable>
    </View>
  );
};
