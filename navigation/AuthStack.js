import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Landing from "../screens/User/Landing";
import Login from "../screens/User/Login";
import Register from "../screens/User/Register";

export default function AuthStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Landing">
      <Stack.Screen
        name="Landing"
        component={Landing}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  );
}
