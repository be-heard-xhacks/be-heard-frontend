import React from "react";
import global from "../../styles.js";
import {
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect } from "react/cjs/react.development";
import { AuthContext } from "../../navigation/AuthProvider.js";
import SmallNews from "../../components/SmallNews";

export default function ForYou(props) {
  const { list } = props.route.params;
  const navigation = useNavigation();
  const { setDisplay } = useContext(AuthContext);
  useEffect(() => {
    setDisplay(false);
  }, []);

  const generateList = () => {
    return list.map((article) => (
      <SmallNews
        spotlight={false}
        article={article}
        key={article.id}
        navigation={props.navigation}
      ></SmallNews>
    ));
  };

  return (
    <ScrollView style={{backgroundColor:'white'}}>
      <SafeAreaView style={{ flex: 1, margin: 20 }}>
        <TouchableOpacity
          onPress={() => {
            setDisplay(true);
            navigation.goBack();
          }}
        >
          <Text>◂</Text>
        </TouchableOpacity>
        <Text style={global.pageTitle}>For You</Text>
        {generateList()}
      </SafeAreaView>
    </ScrollView>
  );
}
