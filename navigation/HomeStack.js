import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import EducateStack from "./EducateStack";
import EnactStack from "./EnactStack";
import {View, StyleSheet} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import TextGradient from "../components/TextGradient";

export default function HomeStack() {
  const Tab = createMaterialTopTabNavigator();
  return (
    <View style={styles.container}>
      <TextGradient height={32} text="Be Heard" style={styles.pageTitle}></TextGradient>
      <Tab.Navigator initialRouteName="Home"
        screenOptions={{
          tabBarIndicatorStyle: { backgroundColor: 'black' },
        }}>
      <Tab.Screen name="Educate" component={EducateStack} />
      <Tab.Screen name="Enact" component={EnactStack} />
    </Tab.Navigator>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  pageTitle: {
    alignSelf: 'center',
    fontFamily: 'boldfont',
    fontSize: 32,
    marginTop:5
  }
});
