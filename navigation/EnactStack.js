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
        children={()=><CreateSpotlight 
        setDisplay={props.setDisplay}/>}
        options={{ header: () => null }} 
      />
      <Stack.Screen 
        name="Email Representatives" 
        children={()=><EmailReps 
        setDisplay={props.setDisplay}/>}
        options={{ header: () => null }} 
      />
      <Stack.Screen 
        name="Sign Petitions" 
        children={()=><SignPetitions 
        setDisplay={props.setDisplay}/>}
        options={{ header: () => null }} 
      />
      <Stack.Screen 
        name="Generate Linktree" 
        children={()=><GenerateLinktree 
        setDisplay={props.setDisplay}/>}
        options={{ header: () => null }} 
      />
      <Stack.Screen 
        name="Generate Infographics" 
        children={()=><GenerateInfo 
        setDisplay={props.setDisplay}/>}
        options={{ header: () => null }} 
      />
    </Stack.Navigator>
  );
}
