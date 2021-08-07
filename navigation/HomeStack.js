import React, { useState, useEffect } from 'react';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import EducateStack from "./EducateStack";
import EnactStack from "./EnactStack";
import {View, StyleSheet} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import TextGradient from "../components/TextGradient";

export default function HomeStack() {
  const Tab = createMaterialTopTabNavigator();
  const [display, setDisplay] = useState(true);
  return (
    <View style={styles.container}>
      <TextGradient height={display ? 30:45} text="Be Heard" style={[styles.pageTitle,]}></TextGradient>
      <Tab.Navigator initialRouteName="Home"
        screenOptions={display ? {
          tabBarIndicatorStyle: { backgroundColor: 'black' },
          tabBarStyle: { display: 'normal' },
        }:{
          tabBarIndicatorStyle: { backgroundColor: 'black' },
          tabBarStyle: { display: 'none' },
          swipeEnabled: false
        }}>
      <Tab.Screen name="Educate" children={()=><EducateStack setDisplay={setDisplay}/>}/>
      <Tab.Screen name="Enact" children={()=><EnactStack setDisplay={setDisplay}/>}/>
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
    marginTop:5,
  }
});
