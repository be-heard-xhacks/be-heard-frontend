import React from "react";
import styles from "../../styles.js";
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
import BigNews from "../../components/BigNews";

export default function Headlines(props) {
  const { list } = props.route.params;
  const navigation = useNavigation();
  const { setDisplay } = useContext(AuthContext);
  useEffect(() => {
    setDisplay(false);
  }, []);

  const generateList = () => {
    return list.map((article) => (
      <BigNews
        article={article}
        key={article.id}
        navigation={props.navigation}
      ></BigNews>
    ));
  };

  return (
    <ScrollView>
      <SafeAreaView style={{ flex: 1 }}>
        <TouchableOpacity
          onPress={() => {
            setDisplay(true);
            navigation.goBack();
          }}
        >
          <Text>◂</Text>
        </TouchableOpacity>
        <Text>Headlines</Text>
        {generateList()}
      </SafeAreaView>
    </ScrollView>
  );
}
