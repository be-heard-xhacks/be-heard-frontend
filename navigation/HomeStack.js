import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import EnactScreen from "../screens/EnactScreen";
import EducateScreen from "../screens/EducateScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
``;

export default function HomeStack() {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Educate" component={EducateScreen} />
      <Tab.Screen name="Enact" component={EnactScreen} />
    </Tab.Navigator>
  );
}
