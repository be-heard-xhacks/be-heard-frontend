import React, { useState } from "react";
import global from "../../styles.js";
import TextGradient from "../../components/TextGradient.js";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  StyleSheet,
} from "react-native";
import SmallNews from "../../components/SmallNews";
import BigNews from "../../components/BigNews";
import dummyData from "../../assets/dummyData";
import { HomeContext } from "../../navigation/HomeProvider";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../navigation/AuthProvider";
import { useContext, useEffect } from "react/cjs/react.development";

export default function EducateScreen(props) {
  const [userName, setUserName] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const { articles, headlines, spotlights } = useContext(HomeContext); //NEWS API
  const { setDisplay } = useContext(AuthContext);
  useEffect(() => {
    console.log(true);
    setDisplay(true);
  }, []);

  const [inChild, setInChild] = useState(false);
  // const [headlines, setHeadlines] = useState(dummyData.headlines);

  // create useEffect for each of these above

  const generateSpotlights = (n) => {
    if (!spotlights || spotlights.length < 1) return null;
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

  const generateHeadlines = (n) => {
    if (!headlines || headlines.length < 1) return null;
    return headlines[0]
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
            setDisplay(false);
            setInChild(true);
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
            setDisplay(false);
            console.log(false);
            setInChild(true);
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
            setDisplay(false);
            setInChild(true);
            console.log(false);
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
        {generateHeadlines(3)}
        <TouchableOpacity
          onPress={() => {
            setDisplay(false);
            setInChild(true);
            console.log(false);
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
