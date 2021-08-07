import React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Linking,
  Alert,
  ImageBackground,
} from "react-native";
import InAppBrowser from "react-native-inappbrowser-reborn";
import { LinearGradient } from "expo-linear-gradient";

export default function Article(props) {
  const { article } = props.route.params;

  // const openBrowser = async () => {
  //   try {
  //     if (await InAppBrowser.isAvailable()) {
  //       const result = await InAppBrowser.open(article.source, {
  //         // iOS Properties
  //         dismissButtonStyle: "cancel",
  //         preferredBarTintColor: "#453AA4",
  //         preferredControlTintColor: "white",
  //         readerMode: false,
  //         animated: true,
  //         modalPresentationStyle: "fullScreen",
  //         modalTransitionStyle: "coverVertical",
  //         modalEnabled: true,
  //         enableBarCollapsing: false,
  //         // Android Properties
  //         showTitle: true,
  //         toolbarColor: "#6200EE",
  //         secondaryToolbarColor: "black",
  //         navigationBarColor: "black",
  //         navigationBarDividerColor: "white",
  //         enableUrlBarHiding: true,
  //         enableDefaultShare: true,
  //         forceCloseOnRedirection: false,
  //         // Specify full animation resource identifier(package:anim/name)
  //         // or only resource name(in case of animation bundled with app).
  //         animations: {
  //           startEnter: "slide_in_right",
  //           startExit: "slide_out_left",
  //           endEnter: "slide_in_left",
  //           endExit: "slide_out_right",
  //         },
  //       });
  //       Alert.alert(JSON.stringify(result));
  //     } else Linking.openURL(url);
  //   } catch (error) {
  //     Alert.alert(error.message);
  //   }
  // };

  const displaySummary = (summary) => {
    return summary.map((sentence) => (
      <View key={sentence} style={{ padding: 10 }}>
        <Text>{sentence}</Text>
      </View>
    ));
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>{article.title}</Text>
      <Text>{article.summary ? displaySummary(article.summary) : ""}</Text>
      <TouchableOpacity onPress={() => Linking.openURL(article.source)}>
        <Text>Read More</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
