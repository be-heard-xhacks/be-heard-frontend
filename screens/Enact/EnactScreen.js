import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../navigation/AuthProvider";
import global from "../../styles.js";
import {
  Text,
  View,
  Button,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StyleSheet
} from "react-native";
import EnactButton from "../../components/EnactButton"

export default function EnactScreen(props) {
  const { user, logout } = useContext(AuthContext);
  const [userName, setUserName] = useState("");
  const [profilePic, setProfilePic] = useState(null);

  // useEffect(() => {
  //   setUserName(user.displayName);
  //   setProfilePic(user.photoURL);
  // }, []); //ComponentDidMount

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.buttons}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Create Spotlight", {});
            console.log("moved to create spotlight");
          }}
        >
          <EnactButton page="Create Spotlight" spotlight={true} subtitle="Lorem ipsum dolor amet. Lorem ipsum dolor."></EnactButton>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Email Representatives");
            console.log("moved to email representatives");
          }}
        >
        <EnactButton page="Email Representatives"></EnactButton>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Sign Petitions");
            console.log("moved to sign petitions");
          }}
        >
        <EnactButton page="Sign Petitions"></EnactButton>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Generate Linktree");
            console.log("moved to generate linktree");
          }}
        >
        <EnactButton page="Generate Linktree"></EnactButton>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("Generate Infographics");
              console.log("moved to generate infographics");
            }}
          >
          <EnactButton page="Generate Infographics"></EnactButton>
          </TouchableOpacity>
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    // height: '100%',
    margin:15,
    // backgroundColor: 'red'
  },
  buttons: {
    flex:1,
    height: '100%',
  }
})