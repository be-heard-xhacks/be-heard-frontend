import React, { useState } from "react";
import global from "../../styles.js";
import { AuthContext } from "../../navigation/AuthProvider";
import { useContext, useEffect } from "react/cjs/react.development";
import { Ionicons } from "@expo/vector-icons";
import {
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
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
      <TouchableOpacity
          onPress={() => {
            setDisplay(true);
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
        <Text style={global.pageTitle}>For You</Text>
        {generateList()}
      </SafeAreaView>
    </ScrollView>
  );
}
