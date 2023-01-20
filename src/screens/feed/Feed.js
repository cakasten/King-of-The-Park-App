import { View, Text, ScrollView } from "react-native";
import { TopNav } from "../../navigation/topNav/TopNav";
import { styles } from "./styles";

export const Feed = () => {
  return (
    <View style={styles.container}>
      <TopNav buttons={["search", "activeChallenges", "addChallenge"]} />
      <ScrollView contentContainerStyle={styles.mainContent}>
        <Text>Add ScrollView Content Here</Text>
      </ScrollView>
    </View>
  );
};
