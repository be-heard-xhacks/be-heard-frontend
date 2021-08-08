import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import global from "../styles.js";
import { LinearGradient } from "expo-linear-gradient";

/*article for reference
{
  "id": "3747840147301059081",
  "img": "https://c.ndtvimg.com/2021-08/qqm883ao_kiren-rijiju_625x300_07_August_21.jpg",
  "link": "https://www.ndtv.com/india-news/video-kiren-rijiju-pops-champagne-to-celebrate-indias-best-olympic-show-2505228",
  "source": "ndtv",
  "sourceIcon": "",
  "summary": "Union Minister Kiren Rijiju popped the champagne today to celebrate India's best-ever performance at the Olympics.",
  "time": "2021-08-07T16:16:57",
  "title": "Video: Kiren Rijiju Pops Champagne To Celebrate India's Best Olympic Show"
},
*/

export default function BigNews(props) {
  // console.log(props.article.image)
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("Article", {
            article: props.article,
            inChild: props.inChild,
          });
          console.log("moved to article");
        }}
      >
        <ImageBackground
          // source={{ uri: props.article.image }}
          // source={props.article.image}
          source={require("../assets/bg.jpg")}
          resizeMode="cover"
          style={styles.image}
        >
          <LinearGradient
            colors={["rgba(0,0,0,0)", "rgba(0,0,0,.9)"]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 0.75 }}
            style={{ flex: 1, justifyContent: "flex-end" }}
          >
            <View style={styles.text}>
              <View style={styles.top}>
                <Image
                  source={require("../assets/source.png")}
                  style={global.srcImg}
                ></Image>
                <Text
                  style={[global.topSubtitle, { color: "white" }]}
                >{`  •  ${props.article.time} hours ago`}</Text>
              </View>
              <Text
                style={[global.headline, styles.spacing, , { color: "white" }]}
              >
                {props.article.title}
              </Text>
              <Text
                style={[global.tag, , { color: "white", borderColor: "white" }]}
              >
                {props.article.interest ? props.article.interest : "Sponsored"}
              </Text>
            </View>
          </LinearGradient>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    // height:100,
    borderRadius: 5,
    overflow: "hidden",
    height: 225,
    // flex: 1,
    // marginLeft: 10
  },
  container: {
    flex: 1,
    paddingBottom: 5,
    marginBottom: 10,
    borderRadius: 5,
  },
  spacing: {
    marginVertical: 15,
  },
  text: {
    padding: 20,
  },
  top: {
    flexDirection: "row",
    alignItems: "center",
  },
});
