import React, { useEffect } from "react";
import global from "../../styles.js";
import { AuthContext } from "../../navigation/AuthProvider";
import { useContext } from "react/cjs/react.development";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import {
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Linking,
  ScrollView,
  StyleSheet,
  ImageBackground,
} from "react-native";

export default function Article(props) {
  const { article } = props.route.params;
  console.log(article);
  const { display, setDisplay } = useContext(AuthContext);
  const { setIsProfile } = useContext(AuthContext);

  const navigation = useNavigation();
  useEffect(() => {
    console.log(false);
    setDisplay(false);
  }, []);

  const inChild = props.route.params.inChild;

  if (inChild) console.log("i'm in a child!");
  else console.log("i'm not in a child");

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <TouchableOpacity
        onPress={() => {
          if (!inChild) {
            setDisplay(!display);
            console.log(!display);
          }
          navigation.goBack();
        }}
        style={{
          height: 40,
          width: 40,
          position: "absolute",
          top: 0,
          left: 10,
        }}
        hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
      >
        <View>
          <Ionicons name="chevron-back-outline" size={25} color="black" />
        </View>
      </TouchableOpacity>

      <SafeAreaView style={{ flex: 1, margin: 20, marginTop: 50 }}>
        <Text style={global.pageTitle}>{article.title}</Text>
        <ImageBackground
          // source={{ uri: article.image }}
          source={article.img}
          // source={require("../../assets/bg.jpg")}
          resizeMode="cover"
          style={styles.image}
        ></ImageBackground>
        <Text>{article.summary ? article.summary : article.sentences}</Text>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL(article.link).catch((err) => {
              console.error("Failed opening page because: ", err);
              alert("Failed to open page");
            })
          }
        >
          <Text
            style={[global.tag, { alignSelf: "center", marginVertical: 10 }]}
          >
            Read More
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 10,
    // flexDirection:'row',
    // justifyContent: 'space-between',
    // alignContent:'flex-end',
    // backgroundColor: 'purple',
  },
  image: {
    // height:100,
    borderRadius: 5,
    overflow: "hidden",
    height: 160,
    // width: 160,
    alignSelf: "stretch",
    marginVertical: 20,
    // flex: 1,
    // marginLeft: 10
  },
  container: {
    flex: 1,
    marginRight: 10,
    borderRadius: 5,
  },
  text: {
    padding: 20,
    alignItems: "center",
  },
});
