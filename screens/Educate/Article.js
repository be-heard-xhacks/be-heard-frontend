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
  StyleSheet
} from "react-native";


export default function Article(props) {
  const { article } = props.route.params;
  const { display, setDisplay } = useContext(AuthContext);
  const { setIsProfile } = useContext(AuthContext);

  const navigation = useNavigation();
  useEffect(() => {
    console.log(false);
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
      <TouchableOpacity
          onPress={() => {
            setDisplay(!display);
            console.log(!display);
            navigation.goBack();
          }}
          style={{height: 40, width:40, position: 'absolute', top: 0, left: 10}}
          hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
        >
            <View>
              <Ionicons name="chevron-back-outline" size={25} color="black" />
            </View>
        </TouchableOpacity>
        
      <SafeAreaView style={{ flex: 1, margin: 20, marginTop: 50 }}>
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

