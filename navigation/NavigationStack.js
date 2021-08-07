import React, { useContext, useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeStack from "./HomeStack";
import ProfileStack from "./ProfileStack";
import AuthStack from "./AuthStack";
import { AuthContext } from "./AuthProvider";
import { ActivityIndicator } from "react-native";
// import firebase from "firebase";

export default function NavigationStack() {
  const { isValidToken, isProfile } = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);
  const [loading, setLoading] = useState(false); // useState(true) after we set up user state change handler

  if (loading) {
    return <ActivityIndicator />;
  }

  function decide() {
    if(true){
      if(isProfile){
        console.log("profile")
        return <ProfileStack/>
      }
      else
       return <HomeStack/>
    }
    else {
       return <AuthStack/>
    }
  }

  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      {isValidToken ? isProfile ? <ProfileStack/>:<HomeStack /> : <AuthStack />}
      {/* {decide()} */}
      {/* <HomeStack /> */}

    </NavigationContainer>
  );
}
