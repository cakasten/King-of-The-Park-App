import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { styles } from "../Styles";
import { Login } from "./Login";
import { Feed } from "../components/feed/Feed";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCableCar } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faMap } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const Tab = createBottomTabNavigator();

export const Main = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case "Home":
              iconName = faCableCar;
            case "Groups":
              iconName = faUserGroup;
            case "Map":
              iconName = faMap;
            case "Profile":
              iconName = faUser;
            default:
              iconName = faHouse;
          }
          return <FontAwesomeIcon icon={iconName} />;
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={Feed} />
      <Tab.Screen name="Groups" component={Feed} />
      <Tab.Screen name="Map" component={Feed} />
      <Tab.Screen name="Profile" component={Feed} />
    </Tab.Navigator>
  );
};
