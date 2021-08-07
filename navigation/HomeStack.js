import React, { useState, useEffect, useContext } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import EducateStack from "./EducateStack";
import EnactStack from "./EnactStack";
import Profile from "./ProfileStack";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import TextGradient from "../components/TextGradient";
import { AuthContext } from "./AuthProvider";
import { FontAwesome } from "@expo/vector-icons";

export default function HomeStack() {
  const Tab = createMaterialTopTabNavigator();
  const { display } = useContext(AuthContext);
  const { setIsProfile } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextGradient
          height={display ? 30 : 45}
          text="Be Heard"
          style={[styles.pageTitle]}
        ></TextGradient>
        <TouchableOpacity
          style={styles.userIcon}
          onPress={() => {
            // setDisplay(false)
            setIsProfile(true);
            // navigation.navigate("Profile");
          }}
        >
          <FontAwesome name="user-circle" size={25} color="#B5B5B5" />
        </TouchableOpacity>
      </View>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={
          display
            ? {
                tabBarIndicatorStyle: { backgroundColor: "black" },
                tabBarStyle: { display: "normal" },
              }
            : {
                tabBarIndicatorStyle: { backgroundColor: "black" },
                tabBarStyle: { display: "none" },
                swipeEnabled: false,
              }
        }
      >
        <Tab.Screen name="Educate" children={() => <EducateStack />} />
        <Tab.Screen name="Enact" children={() => <EnactStack />} />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  pageTitle: {
    alignSelf: "center",
    fontFamily: "boldfont",
    fontSize: 32,
    marginTop: 5,
    // flex: 1,
  },
  userIcon: {
    position: "absolute",
    top: 3,
    right: 20,
  },
  header: {
    // flexDirection:'row',
    // justifyContent: 'space-between',
    // backgroundColor: 'purple',
  },
});
