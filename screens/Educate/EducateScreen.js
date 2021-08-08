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
  RefreshControl,
} from "react-native";
import TextGradient from "../../components/TextGradient";
import SmallNews from "../../components/SmallNews";
import BigNews from "../../components/BigNews";
import dummyData from "../../assets/dummyData";
import global from "../../styles.js";
import { HomeContext } from "../../navigation/HomeProvider";

export default function EducateScreen(props) {
  const [userName, setUserName] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const { articles } = useContext(HomeContext); //NEWS API

  // useEffect(() => {
  //   setUserName(user.displayName);
  //   setProfilePic(user.photoURL);
  // }, []); //ComponentDidMount

  /* <Image style={styles.profileImage} source={{ uri: profilePic }} /> */

  const [spotlights, setSpotlights] = useState(dummyData.spotlights); //DATABASE
  //const [forYou, setForYou] = useState(dummyData.forYou); //NEWS API
  const [headlines, setHeadlines] = useState(dummyData.headlines); //DATABASE

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
    if (!articles || articles.length < 1) return null;
    return articles
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

  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.section}>
        <TextGradient
          height={32}
          text="Today's Pick"
          style={global.h1}
        ></TextGradient>
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
            props.navigation.navigate("Spotlighted", { list: spotlights });
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
            props.navigation.navigate("For You", { list: articles });
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
            props.navigation.navigate("Headlines", { list: headlines });
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
