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

  const displaySummary = (summary) => {
    return summary.map((sentence) => (
      <View key={sentence} style={{ padding: 10 }}>
        <Text>{sentence}</Text>
      </View>
    ));
  };

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
        <Text>{article.summary ? displaySummary(article.summary) : ""}</Text>
        <TouchableOpacity onPress={() => Linking.openURL(article.source)}>
          <Text>Read More</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
}
