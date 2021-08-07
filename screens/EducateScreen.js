import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../navigation/AuthProvider";
import { StyleSheet } from "react-native";
import { Text, View, Button, Image } from "react-native";
import TextGradient from "../components/TextGradient";

import global from "../styles.js";

export default function EducateScreen() {
  const { user, logout } = useContext(AuthContext);
  const [userName, setUserName] = useState("");
  const [profilePic, setProfilePic] = useState(null);

  // useEffect(() => {
  //   setUserName(user.displayName);
  //   setProfilePic(user.photoURL);
  // }, []); //ComponentDidMount

  /* <Image style={styles.profileImage} source={{ uri: profilePic }} /> */
  /* <Button onPress={logout} title="Log Out" /> */

  return (
    <View style={styles.screen}>
      <View style={styles.section}>
        <TextGradient height={32} text="Today's Pick" style={global.h1}></TextGradient>
        <Image
          source={require('../assets/bg.jpg')}
          style={styles.todayImg}
        ></Image>
        <View style={styles.headline}>
          <Text style={global.headline}>Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit</Text>
          <Image
            source={require('../assets/source.png')}
            style={global.srcImg}
          ></Image>
        </View>
        <Text style={global.tag}>Label</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section:{
    padding: 25,
    marginVertical: 10,
    backgroundColor: 'white',
  },
  todayImg: {
    width: '100%',
    height: 120,
    borderRadius:5,
    marginBottom: 10
  },
  headline: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  }
});
