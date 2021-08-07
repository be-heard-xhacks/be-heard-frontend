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
    black: require('./assets/fonts/ProductSans-Black.ttf'),
    blackItalic: require('./assets/fonts/ProductSans-BlackItalic.ttf'),
    bold: require('./assets/fonts/ProductSans-Bold.ttf'),
    boldItalic: require('./assets/fonts/ProductSans-BoldItalic.ttf'),
    italic: require('./assets/fonts/ProductSans-Italic.ttf'),
    light: require('./assets/fonts/ProductSans-Light.ttf'),
    lightItalic: require('./assets/fonts/ProductSans-LightItalic.ttf'),
    medium: require('./assets/fonts/ProductSans-Medium.ttf'),
    mediumItalic: require('./assets/fonts/ProductSans-MediumItalic.ttf'),
    regular: require('./assets/fonts/ProductSans-Regular.ttf'),
    thin: require('./assets/fonts/ProductSans-Thin.ttf'),
    thinItalic: require('./assets/fonts/ProductSans-ThinItalic.ttf'),
  });
  
  if (!loaded) {
    return null;
  }
  return <Providers />;
}
