import React from 'react';
import MaskedView from "@react-native-community/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import { Text } from "react-native";


export default function TextGradient(props) {
  return (
    <MaskedView
    style={{ height: props.height }}
    maskElement={<Text style={props.style}>{props.text}</Text>}
  >
    <LinearGradient
      colors={['#FF9900', '#FF0000']}
      start={{ x: 1, y: 1 }}
      end={{ x: 0, y: 0.33 }}
      style={{ flex: 1 }}
    />
  </MaskedView>
  );
}