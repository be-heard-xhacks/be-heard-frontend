import React, { useState, useEffect, useContext } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import EducateStack from "./EducateStack";
import EnactStack from "./EnactStack";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { AuthContext } from "./AuthProvider";
import Header from "../components/Header";

export default function HomeStack(props) {
  const Tab = createMaterialTopTabNavigator();
  const { display } = useContext(AuthContext);
  const { setIsProfile } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
      <TextGradient
          height={display ? 30 : 45}
          // width="70%"
          text="Be Heard"
          style={[styles.pageTitle]}
        ></TextGradient>  
        {!display && <TouchableOpacity
          onPress={() => {
            
          }}
          style={{height: 40, width:40, position: 'absolute', top: 0, left: 10}}
          hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
        >
            <View>
              <Ionicons name="chevron-back-outline" size={25} color="black" />
            </View>
        </TouchableOpacity>}
        <TouchableOpacity
          style={styles.userIcon}
          onPress={() => {
            // setDisplay(false)
            setIsProfile(true);
            // navigation.navigate("Profile");
          }}
          hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
        >
          <FontAwesome name="user-circle" size={25} color="#B5B5B5" />
        </TouchableOpacity>
      </View> */}
      {display && <Header display={display}></Header>}
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
});
