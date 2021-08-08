import React from "react";
import global from "../../styles.js";
import { Text, TouchableOpacity, View, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect } from "react/cjs/react.development";
import { AuthContext } from "../../navigation/AuthProvider.js";
import { Ionicons } from "@expo/vector-icons";

export default function SignPetitions(props) {
  const navigation = useNavigation();
  const { setDisplay } = useContext(AuthContext);
  useEffect(() => {
    setDisplay(false);
  }, []);
  return (
    <SafeAreaView style={{backgroundColor:'white', height:'100%'}}>
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
      <View style={{ flex: 1, margin: 20, marginTop: 50 }}>
      <Text style={global.pageTitle}>Sign Petitions</Text>
      </View>
    </SafeAreaView>
  );
}
