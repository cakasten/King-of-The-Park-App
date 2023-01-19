import { View } from "react-native";
import { styles } from './styles';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { Logo } from "../../components/logo/Logo";

export const TopNav = () => {
  return (
    <View style={styles.topNav}>
      <Logo size={'small'} />
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Pressable
          onPress={() => alert("Add Challenge")}
          style={styles.topButton}
        >
          <FontAwesomeIcon icon={faSquarePlus} size={40} />
        </Pressable>
        <Pressable
          onPress={() => alert("Active Challenges")}
          style={styles.topButton}
        >
          <FontAwesomeIcon icon={faBullseye} size={40} />
        </Pressable>
        <Pressable onPress={() => alert("Search")} style={styles.topButton}>
          <FontAwesomeIcon icon={faMagnifyingGlass} size={40} />
        </Pressable>
      </View>
    </View>
  );
};
