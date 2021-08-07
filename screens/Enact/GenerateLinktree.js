import React from "react";
import styles from "../../styles.js";
import { Text, TouchableOpacity, View, SafeAreaView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useEffect } from "react/cjs/react.development";

export default function GenerateLinktree(props) {
  const navigation = useNavigation();
  useEffect(() => {
    props.setDisplay(false)
  });
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableOpacity
        onPress={() => {
          props.setDisplay(true)
          navigation.goBack();
        }}
      ><Text>◂</Text></TouchableOpacity>
      <Text>Generate Linktree</Text>
    </SafeAreaView>
  );
}
