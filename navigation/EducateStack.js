import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import EducateScreen from "../screens/Educate/EducateScreen";
import ForYou from "../screens/Educate/ForYou";
import Headlines from "../screens/Educate/Headlines";
import ReadingSchedule from "../screens/Educate/ReadingSchedule";
import Spotlighted from "../screens/Educate/Spotlighted";

export default function EducateStack(props) {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Educate">
      <Stack.Screen
        name="Educate"
        component={EducateScreen}
        options={{ header: () => null }}
      />
      <Stack.Screen 
        name="For You" 
        children={()=><ForYou 
        setDisplay={props.setDisplay}/>}
        options={{ header: () => null }} 
      />
      <Stack.Screen 
        name="Headlines" 
        children={()=><Headlines 
        setDisplay={props.setDisplay}/>}
        options={{ header: () => null }} 
      />
      <Stack.Screen 
        name="Reading Schedule" 
        children={()=><ReadingSchedule 
        setDisplay={props.setDisplay}/>}
        options={{ header: () => null }} 
      />
      <Stack.Screen 
        name="Spotlighted" 
        children={()=><Spotlighted 
        setDisplay={props.setDisplay}/>}
        options={{ header: () => null }} 
      />
    </Stack.Navigator>
  );
}
