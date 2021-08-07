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

export default function BigNews(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("Article", { article: props.article });
          console.log("moved to article");
        }}
      >
        <ImageBackground
          source={{ uri: props.article.image }}
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
                >{`  •  ${props.article.hr} hours ago`}</Text>
              </View>
              <Text
                style={[global.headline, styles.spacing, , { color: "white" }]}
              >
                {props.article.title}
              </Text>
              <Text
                style={[global.tag, , { color: "white", borderColor: "white" }]}
              >
                {props.article.label}
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
