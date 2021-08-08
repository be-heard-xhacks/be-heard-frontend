import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from "react-native";
import global from "../styles.js";

export default function SmallNews(props) {
  const findTime = (utc) => {
    let a = new Date(utc);
    let b = new Date();
    return Math.ceil(Math.abs(a - b) / 36e5);
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        props.navigation.navigate("Article", {
          article: props.article,
          inChild: props.inChild,
          spotlight: props.spotlight,
        });
        console.log("moved to article");
      }}
    >
      <View style={styles.text}>
        {props.spotlight ? (
          <Text style={global.topSubtitle}>
            Spotlighted by {props.article.author}
          </Text>
        ) : (
          <View style={styles.top}>
            <Image
              source={{
                uri: props.article.img
                  ? props.article.img
                  : "https://www.edmundsgovtech.com/wp-content/uploads/2020/01/default-picture_0_0.png",
              }}
              style={global.srcImg}
            ></Image>
            <Text style={[global.topSubtitle]}>{`  •  ${
              props.article.time
                ? findTime(props.article.time)
                : Math.ceil(Math.random(5) * 5)
            } hours ago`}</Text>
          </View>
        )}
        <Text style={[global.headline, styles.spacing]}>
          {props.article.title}
        </Text>
        {/* <Image
            source={require('../assets/source.png')}
            style={global.srcImg}
          ></Image> */}
        {props.spotlight && (
          <Text style={global.tag}>
            {props.article.label ? props.article.label : "Sponsored"}
          </Text>
        )}
      </View>
      <Image
        source={{
          uri: props.article.img
            ? props.article.img
            : "https://www.edmundsgovtech.com/wp-content/uploads/2020/01/default-picture_0_0.png",
        }}
        // source={
        //   props.article.image
        //     ? props.article.image
        //     : require("../assets/bg.jpg")
        // }
        // source={require("../assets/bg.jpg")}
        resizeMode="cover"
        style={styles.img}
      ></Image>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  img: {
    height: 100,
    borderRadius: 5,
    flex: 1,
    marginLeft: 10,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    borderBottomColor: "#B5B5B5",
    paddingBottom: 15,
    marginBottom: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  spacing: {
    marginVertical: 10,
  },
  text: {
    flex: 2.5,
  },
  top: {
    flexDirection: "row",
    alignItems: "center",
  },
});
