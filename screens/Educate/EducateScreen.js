import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../navigation/AuthProvider";
import { StyleSheet } from "react-native";
import { Text, View, Button, Image, TouchableOpacity, ScrollView } from "react-native";
import TextGradient from "../../components/TextGradient";
import SmallNews from "../../components/SmallNews";

import global from "../../styles.js";

export default function EducateScreen(props) {
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
    <ScrollView>
      <View style={styles.section}>
        <TextGradient height={32} text="Today's Pick" style={global.h1}></TextGradient>
        <Image
          source={require('../../assets/bg.jpg')}
          style={styles.todayImg}
        ></Image>
        <View style={styles.headline}>
          <Text style={global.headline}>Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit</Text>
          <Image
            source={require('../../assets/source.png')}
            style={global.srcImg}
          ></Image>
        </View>
        <Text style={global.tag}>Label</Text>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Reading Schedule", {});
            console.log("moved to reading schedule");
          }}
        >
          <Text style={global.navLabel}>See reading schedule ▸</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.section}>
        <TextGradient height={32} text="Spotlighted" style={global.h1}></TextGradient>
        <SmallNews></SmallNews>
        <SmallNews></SmallNews>
        <SmallNews></SmallNews>
        <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("Spotlighted");
          console.log("moved to spotlighted");
        }}
      >
        <Text style={global.navLabel}>See all ▸</Text>
      </TouchableOpacity>
      </View>

      
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("For You");
          console.log("moved to for you");
        }}
      >
        <Text>For You</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("Headlines");
          console.log("moved to headlines");
        }}
      >
        <Text>Headlinesss</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  section:{
    padding: 25,
    marginTop: 10,
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
    marginVertical: 10,
  }
});
