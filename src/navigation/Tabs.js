import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCableCar, faM } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faMap } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Feed } from "../screens/feed/Feed";
import { Groups } from "../screens/groups/Groups";
import { Map } from "../screens/map/Map";

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
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
        children={() => <Groups groupName={"Group name goes here"} />}
        options={{
          tabBarIcon: () => <FontAwesomeIcon icon={faUserGroup} size={27} />,
        }}
      />
      <Tab.Screen
        name="Map"
        component={Map}
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
