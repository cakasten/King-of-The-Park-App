import { View, Pressable } from "react-native";
import { styles } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import { faBullseye, faUserPlus, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Logo } from "../../components/logo/Logo";

export const TopNav = ({ buttons }) => {
  return (
    <View style={styles.topNav}>
      <Logo size={"small"} />
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {buttons.map((element) => {
          switch (element) {
            case "search":
              return (
                <Pressable style={styles.topButton} onPress={()=> alert('Search')}>
                  <FontAwesomeIcon icon={faMagnifyingGlass} size={35} />
                </Pressable>
              );
            case "activeChallenges":
              return (
                <Pressable style={styles.topButton} onPress={()=> alert('Active Challenges')}>
                  <FontAwesomeIcon icon={faBullseye} size={35} />
                </Pressable>
              );
            case "addChallenge":
              return (
                <Pressable style={styles.topButton} onPress={()=> alert('Add Challenge')}>
                  <FontAwesomeIcon icon={faSquarePlus} size={35} />
                </Pressable>
              );
            case 'inviteFriend':
                return (
                  <Pressable style={styles.topButton} onPress={()=> alert("Invite friend to group")}>
                  <FontAwesomeIcon icon={faUserPlus} size={35} />
                </Pressable>
                )
          }
        })}
      </View>
    </View>
    // <View style={styles.topNav}>
    //   <Logo size={'small'} />
    //   <View style={{ flexDirection: "row", alignItems: "center" }}>
    //     <Pressable
    //       onPress={() => alert("Add Challenge")}
    //       style={styles.topButton}
    //     >
    //       <FontAwesomeIcon icon={faSquarePlus} size={35} />
    //     </Pressable>
    //     <Pressable
    //       onPress={() => alert("Active Challenges")}
    //       style={styles.topButton}
    //     >
    //       <FontAwesomeIcon icon={faBullseye} size={35} />
    //     </Pressable>
    //     <Pressable onPress={() => alert("Search")} style={styles.topButton}>
    //       <FontAwesomeIcon icon={faMagnifyingGlass} size={35} />
    //     </Pressable>
    //   </View>
    // </View>
  );
};
