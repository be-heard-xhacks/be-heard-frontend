import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import global from "../styles.js";
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome } from "@expo/vector-icons";
import TextGradient from "../components/TextGradient";
import { AuthContext } from "../navigation/AuthProvider";
import { useContext } from "react/cjs/react.development";

export default function Header(props) {
  return (
    <View style={styles.header}>
    <TextGradient
        height={props.display ? 30 : 45}
        // width="70%"
        text="Be Heard"
        style={[styles.pageTitle]}
      ></TextGradient>  
      {!props.display && <TouchableOpacity
        onPress={() => {
            setDisplay(true);
            props.navigation.goBack();
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
    </View>
  );
}

const styles = StyleSheet.create({
    pageTitle: {
      alignSelf: "center",
      fontFamily: "boldfont",
      fontSize: 32,
      // marginTop: 10,
      // flex: 1,
    },
    userIcon: {
      position: "absolute",
      top: 3,
      right: 20,
      flex: 1
    },
    header: {
      marginTop: 10
      // flexDirection:'row',
      // justifyContent: 'space-between',
      // alignContent:'flex-end',
      // backgroundColor: 'purple',
    },
  });
  
