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
        <ImageBackground
          source={{ uri: article.image }}
          resizeMode="cover"
          style={styles.image}
        ></ImageBackground>
        <Text>{article.summary ? article.summary : ""}</Text>
    <   TouchableOpacity onPress={() => 
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

  header: {
    marginTop: 10
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
