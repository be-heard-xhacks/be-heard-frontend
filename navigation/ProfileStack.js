import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../screens/Profile";


export default function ProfileStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="Profile"
        component={Profile}
        // options={{ header: () => null }}
      />
    </Stack.Navigator>
  );
}
