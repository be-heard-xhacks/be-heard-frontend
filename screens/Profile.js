import React, { useContext } from "react";
import { AuthContext } from "../navigation/AuthProvider";
import { Text, View, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function Profile(props) {
// const navigation = useNavigation();
const { setIsProfile } = useContext(AuthContext); 
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
            setIsProfile(false)
        //   props.setDisplay(true)
        //   navigation.navigate("Home");
        }}
      ><Text>◂</Text></TouchableOpacity>
      <Text>Profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  
});
