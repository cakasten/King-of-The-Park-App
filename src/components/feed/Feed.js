import { View, Text, ScrollView } from "react-native";
import { TopNav } from "../../navigation/topNav/TopNav";
import { feedStyles } from "./feedStyles";


export const Feed = () => {
  return (
    <View style={feedStyles.container}>
      <TopNav />
      <ScrollView contentContainerStyle={feedStyles.mainContent}>
        <Text>Add ScrollView Content Here</Text>
      </ScrollView>
    </View>
  );
};
