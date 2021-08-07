import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styles from "./styles.js";
import NavigationStack from "./navigation/NavigationStack";
import Providers from "./navigation/index";
import { useFonts } from 'expo-font';


export default function App() {
  const [loaded] = useFonts({
    boldfont: require('./assets/fonts/theboldfont.ttf'),
    arcon: require('./assets/fonts/Arcon-Regular.otf'),
  });
  
  if (!loaded) {
    return null;
  }
  return <Providers />;
}
