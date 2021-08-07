import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import EducateScreen from "../screens/Educate/EducateScreen";
import ForYou from "../screens/Educate/ForYou";
import Headlines from "../screens/Educate/Headlines";
import ReadingSchedule from "../screens/Educate/ReadingSchedule";
import Spotlighted from "../screens/Educate/Spotlighted";
import Article from "../screens/Educate/Article";

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
        name="Article"
        component={Article}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="For You"
        component={ForYou}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="Headlines"
        component={Headlines}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="Reading Schedule"
        component={ReadingSchedule}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="Spotlighted"
        component={Spotlighted}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  );
}
