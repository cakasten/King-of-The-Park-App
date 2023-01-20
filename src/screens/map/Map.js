import { View, Text } from "react-native";
import { TopNav } from "../../navigation/topNav/TopNav";
import { styles } from "./styles";
export const Map = () => {
  return (
    <View style={styles.container}>
      <TopNav buttons={['search']} />
      <View style={styles.mainContent}>
        <Text>Map goes here</Text>
      </View>
    </View>
  );
};
