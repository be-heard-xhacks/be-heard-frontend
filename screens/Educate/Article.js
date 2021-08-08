import React, { useEffect } from "react";
import global from "../../styles.js";
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome } from "@expo/vector-icons";
import TextGradient from "../../components/TextGradient.js";

import {
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Linking,
  Alert,
  ImageBackground,
  ScrollView,
  StyleSheet
} from "react-native";
import InAppBrowser from "react-native-inappbrowser-reborn";
import Header from "../../components/Header.js";
import { AuthContext } from "../../navigation/AuthProvider";
import { useContext } from "react/cjs/react.development";

export default function Article(props) {
  const { article } = props.route.params;
  const { setDisplay } = useContext(AuthContext);
  const { setIsProfile } = useContext(AuthContext);

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
    <ScrollView style={{backgroundColor:'white'}}>

<View style={styles.header}>
    <TextGradient
        height={props.display ? 30 : 45}
        // width="70%"
        text="Be Heard"
        style={[styles.pageTitle]}
      ></TextGradient>  
      {!props.display && <TouchableOpacity
        onPress={() => {
            setDisplay(true);
            props.navigation.goBack();
        }}
        style={{height: 40, width:40, position: 'absolute', top: 0, left: 10}}
        hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
      >
          <View>
            <Ionicons name="chevron-back-outline" size={25} color="black" />
          </View>
      </TouchableOpacity>}
      <TouchableOpacity
        style={styles.userIcon}
        onPress={() => {
          // setDisplay(false)
          setIsProfile(true);
          // navigation.navigate("Profile");
        }}
        hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
      >
        <FontAwesome name="user-circle" size={25} color="#B5B5B5" />
      </TouchableOpacity>
    </View>

      <SafeAreaView style={{ flex: 1, margin: 20 }}>
        <TouchableOpacity
          onPress={() => {
            setDisplay(true);
            props.navigation.goBack();
          }}
        >
          <Text>◂</Text>
        </TouchableOpacity>
        <Text style={global.pageTitle}>{article.title}</Text>
        <Text>{article.summary ? displaySummary(article.summary) : ""}</Text>
        <TouchableOpacity onPress={() => 
          Linking.openURL(article.source).catch(err => {
            console.error("Failed opening page because: ", err)
            alert('Failed to open page')
          })}>
          <Text style={[global.tag, {alignSelf:'center', marginVertical: 10}]}>Read More</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  pageTitle: {
    alignSelf: "center",
    fontFamily: "boldfont",
    fontSize: 32,
    // marginTop: 10,
    // flex: 1,
  },
  userIcon: {
    position: "absolute",
    top: 3,
    right: 20,
    flex: 1
  },
  header: {
    marginTop: 10
    // flexDirection:'row',
    // justifyContent: 'space-between',
    // alignContent:'flex-end',
    // backgroundColor: 'purple',
  },
});

