import { View, Text, ScrollView } from "react-native";
import { styles } from "../../Styles";
import { Logo } from "../Logo";
import { feedStyles } from "./feedStyles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

export const Feed = () => {
  return (
    <View style={feedStyles.container}>
      <View style={feedStyles.topNav}>
        <Logo size={styles.logo.small} />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Pressable
            onPress={() => alert("Add Challenge")}
            style={feedStyles.topButton}
          >
            <FontAwesomeIcon icon={faSquarePlus} size={40} />
          </Pressable>
          <Pressable
            onPress={() => alert("Active Challenges")}
            style={feedStyles.topButton}
          >
            <FontAwesomeIcon icon={faBullseye} size={40} />
          </Pressable>
          <Pressable
            onPress={() => alert("Search")}
            style={feedStyles.topButton}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} size={40} />
          </Pressable>
        </View>
      </View>
      <ScrollView contentContainerStyle={feedStyles.mainContent}>
        <Text>Add ScrollView Content Here</Text>
      </ScrollView>
    </View>
  );
};
