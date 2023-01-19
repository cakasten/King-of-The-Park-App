import { View, Text } from "react-native";
import { TopNav } from "../../navigation/topNav/TopNav";
import { styles } from "./styles";
export const Groups = ({ groupName }) => {
  return (
    <View style={styles.container}>
      <TopNav />
      <View style={styles.mainContent}>
        <Text style={styles.title}>{groupName}</Text>
      </View>
    </View>
  );
};
