import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import EnactScreen from "../screens/Enact/EnactScreen";
import CreateSpotlight from "../screens/Enact/CreateSpotlight";
import EmailReps from "../screens/Enact/EmailReps";
import SignPetitions from "../screens/Enact/SignPetitions";
import GenerateLinktree from "../screens/Enact/GenerateLinktree";
import GenerateInfo from "../screens/Enact/GenerateInfo";

export default function EnactStack(props) {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Enact">
      <Stack.Screen
        name="Enact"
        component={EnactScreen}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="Create Spotlight"
        component={CreateSpotlight}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="Email Representatives"
        component={EmailReps}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="Sign Petitions"
        component={SignPetitions}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="Generate Linktree"
        component={GenerateLinktree}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="Generate Infographics"
        component={GenerateInfo}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  );
}
