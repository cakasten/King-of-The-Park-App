import { View, Text, ScrollView } from "react-native";
import { styles } from "../../Styles";
import { Logo } from "../Logo";
import { feedStyles } from "./feedStyles";
export const Feed = () => {

  return (
    <View style={feedStyles.container}>
      <View style={feedStyles.topNav}>
        <Logo size={styles.logo.small} />
        <View style={{flexDirection: 'row', alignItems: 'end'}}>
            <View style={feedStyles.thing}></View>
            <View style={feedStyles.thing}></View>
            <View style={feedStyles.thing}></View>
        </View>
      </View>
      <ScrollView contentContainerStyle={feedStyles.mainContent} >
        <Text>Add ScrollView Content Here</Text>
      </ScrollView>
    </View>
  );
};
