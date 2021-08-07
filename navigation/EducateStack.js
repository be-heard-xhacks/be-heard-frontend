import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import EducateScreen from "../screens/Educate/EducateScreen";
import ForYou from "../screens/Educate/ForYou";
import Headlines from "../screens/Educate/Headlines";
import ReadingSchedule from "../screens/Educate/ReadingSchedule";
import Spotlighted from "../screens/Educate/Spotlighted";
import Article from "../screens/Educate/Article";

export default function EducateStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Educate">
      <Stack.Screen
        name="Educate"
        component={EducateScreen}
        options={{ header: () => null }}
      />
      <Stack.Screen name="For You" component={ForYou} />
      <Stack.Screen name="Headlines" component={Headlines} />
      <Stack.Screen name="Reading Schedule" component={ReadingSchedule} />
      <Stack.Screen name="Spotlighted" component={Spotlighted} />
      <Stack.Screen name="Article" component={Article} />
    </Stack.Navigator>
  );
}
