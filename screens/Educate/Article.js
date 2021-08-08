import React, { useEffect } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Linking,
  Alert,
  ImageBackground,
  ScrollView,
  StyleSheet,
} from "react-native";
import InAppBrowser from "react-native-inappbrowser-reborn";
import { LinearGradient } from "expo-linear-gradient";
import { AuthContext } from "../../navigation/AuthProvider";
import { useContext } from "react/cjs/react.development";

export default function Article(props) {
  const { article } = props.route.params;
  const { setDisplay } = useContext(AuthContext);
  useEffect(() => {
    setDisplay(false);
  }, []);

  return (
    <ScrollView>
      <SafeAreaView style={{ flex: 1 }}>
        <TouchableOpacity
          onPress={() => {
            setDisplay(true);
            props.navigation.goBack();
          }}
        >
          <Text>◂</Text>
        </TouchableOpacity>
        <Text>{article.title}</Text>
        <ImageBackground
          source={{ uri: article.image }}
          resizeMode="cover"
          style={styles.image}
        ></ImageBackground>
        <Text>{article.summary ? article.summary : ""}</Text>
        <TouchableOpacity onPress={() => Linking.openURL(article.link)}>
          <Text>Read More</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    // height:100,
    borderRadius: 5,
    overflow: "hidden",
    height: 160,
    width: 160,
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
