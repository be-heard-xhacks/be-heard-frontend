import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../navigation/AuthProvider";
import { StyleSheet, Touchable } from "react-native";
import {
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import TextGradient from "../../components/TextGradient";
import SmallNews from "../../components/SmallNews";
import BigNews from "../../components/BigNews";
import dummyData from "../../assets/dummyData";
import global from "../../styles.js";

export default function EducateScreen(props) {
  const {logout } = useContext(AuthContext);
  const [userName, setUserName] = useState("");
  const [profilePic, setProfilePic] = useState(null);

  // useEffect(() => {
  //   setUserName(user.displayName);
  //   setProfilePic(user.photoURL);
  // }, []); //ComponentDidMount

  /* <Image style={styles.profileImage} source={{ uri: profilePic }} /> */
   

  const [spotlights, setSpotlights] = useState(dummyData.spotlights);
  const [forYou, setForYou] = useState(dummyData.forYou);
  const [headlines, setHeadlines] = useState(dummyData.headlines);

  // create useEffect for each of these above

  const generateSpotlights = (n) => {
    return spotlights
      .slice(0, n)
      .map((article) => (
        <SmallNews
          spotlight={true}
          article={article}
          key={article.id}
          navigation={props.navigation}
        ></SmallNews>
      ));
  };

  const generateForYou = (n) => {
    return forYou
      .slice(0, n)
      .map((article) => (
        <BigNews
          article={article}
          key={article.id}
          navigation={props.navigation}
        ></BigNews>
      ));
  };

  const generateHeadliens = (n) => {
    return headlines
      .slice(0, n)
      .map((article) => (
        <SmallNews
          article={article}
          key={article.id}
          navigation={props.navigation}
        ></SmallNews>
      ));
  };

  return (
    <ScrollView>
      <View style={styles.section}>

        <TextGradient
          height={32}
          text="Today's Pick"
          style={global.h1}
        ></TextGradient>
        <Button onPress={logout} title="Log Out" /> 
        <TouchableOpacity>
          <Image
            source={require("../../assets/bg.jpg")}
            style={styles.todayImg}
          ></Image>
          <View style={styles.headline}>
            <Text style={global.headline}>
              Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit
            </Text>
            <Image
              source={require("../../assets/source.png")}
              style={global.srcImg}
            ></Image>
          </View>
          <Text style={global.tag}>Label</Text>
        </TouchableOpacity>
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
        <TextGradient
          height={32}
          text="Spotlighted"
          style={global.h1}
        ></TextGradient>
        {generateSpotlights(3)}
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Spotlighted");
            console.log("moved to spotlighted");
          }}
        >
          <Text style={global.navLabel}>See all ▸</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <TextGradient
          height={32}
          text="For You"
          style={global.h1}
        ></TextGradient>
        {generateForYou(3)}
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("For You");
            console.log("moved to for you");
          }}
        >
          <Text style={global.navLabel}>See all ▸</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <TextGradient
          height={32}
          text="Headlines"
          style={global.h1}
        ></TextGradient>
        {generateHeadliens(3)}
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Headlines");
            console.log("moved to headlines");
          }}
        >
          <Text style={global.navLabel}>See all ▸</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  section: {
    padding: 25,
    marginTop: 10,
    backgroundColor: "white",
  },
  todayImg: {
    width: "100%",
    height: 120,
    borderRadius: 5,
    marginBottom: 10,
  },
  headline: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
});
