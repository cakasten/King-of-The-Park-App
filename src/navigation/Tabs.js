import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feed } from "../components/feed/Feed";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCableCar, faM } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faMap } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        // tabBarIcon: () => {
        //   let iconName;
        //   switch (Tab.Screen) {
        //     case "Home":
        //       iconName = faCableCar;
        //     case "Groups":
        //       iconName = faUserGroup;
        //     case "Map":
        //       iconName = faMap;
        //     case "Profile":
        //       iconName = faUser;
        //     default:
        //       iconName = faHouse;
        //   }
        //   return <FontAwesomeIcon icon={iconName} size={27} />;
        // },
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="Home"
        component={Feed}
        options={{
          tabBarIcon: () => <FontAwesomeIcon icon={faCableCar} size={27} />,
        }}
      />
      <Tab.Screen
        name="Groups"
        component={Feed}
        options={{
          tabBarIcon: () => <FontAwesomeIcon icon={faUserGroup} size={27} />,
        }}
      />
      <Tab.Screen
        name="Map"
        component={Feed}
        options={{
          tabBarIcon: () => <FontAwesomeIcon icon={faMap} size={27} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Feed}
        options={{
          tabBarIcon: () => <FontAwesomeIcon icon={faUser} size={27} />,
        }}
      />
    </Tab.Navigator>
  );
};
