import React, { useContext, useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeStack from "./HomeStack";
import AuthStack from "./AuthStack";
import { AuthContext } from "./AuthProvider";
import { ActivityIndicator } from "react-native";
// import firebase from "firebase";

export default function NavigationStack() {
  const { isValidToken } = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);
  const [loading, setLoading] = useState(false); // useState(true) after we set up user state change handler

  //handle user state changes
  // useEffect(() => {
  //   const subscriber = firebase.auth().onAuthStateChanged(function (user) {
  //     setUser(user);
  //     if (initializing) setInitializing(false);
  //     setLoading(false);
  //   });
  //   return subscriber; // unsubscribe on unmount
  // }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      {isValidToken ? <HomeStack /> : <AuthStack />}
      {/* <HomeStack /> */}
    </NavigationContainer>
  );
}
