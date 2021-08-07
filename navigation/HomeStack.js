import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import EducateStack from "./EducateStack";
import EnactStack from "./EnactStack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
``;

export default function HomeStack() {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Educate" component={EducateStack} />
      <Tab.Screen name="Enact" component={EnactStack} />
    </Tab.Navigator>
  );
}
