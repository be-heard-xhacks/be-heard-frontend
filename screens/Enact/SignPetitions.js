import React from "react";
import global from "../../styles.js";
import { Text, TouchableOpacity, View, SafeAreaView, StyleSheet, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react/cjs/react.development";
import { AuthContext } from "../../navigation/AuthProvider.js";
import { Ionicons } from "@expo/vector-icons";
import {Picker} from '@react-native-picker/picker';
import SmallNews from "../../components/SmallNews"

export default function SignPetitions(props) {
  const navigation = useNavigation();
  const { setDisplay } = useContext(AuthContext);
  const [selectedTopic, setSelectedTopic] = useState();
  const interests = ['Feminism', 'Politics', 'LGBTQ', 'Economics', 'Tech Equity',
  'Education','Racial Justice','International','Environment',]
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
      <Text style={global.headline}>Filter By Topic</Text>
      <Picker
        style={styles.picker} 
        selectedValue={selectedTopic}
        onValueChange={(itemValue) =>
          setSelectedTopic(itemValue)
        }>
      {interests.map((s) => (<Picker.Item label={s} value={s} key={s}></Picker.Item>))}
      </Picker>
      <Text style={global.headline}>Petitions</Text>
      <ScrollView>
      <TouchableOpacity
        style={styles.container}
      >
      <View style={styles.text}>
        <Text style={[global.headline, styles.spacing]}>
          Lorem Ipsum Dolor Amet
        </Text>
      </View>
      <Image
        source={require("../../assets/bg.jpg")}
        resizeMode="cover"
        style={styles.img}
      ></Image>
    </TouchableOpacity>
    <TouchableOpacity
        style={styles.container}
      >
      <View style={styles.text}>
        <Text style={[global.headline, styles.spacing]}>
          Lorem Ipsum Dolor Amet
        </Text>
      </View>
      <Image
        source={require("../../assets/bg.jpg")}
        resizeMode="cover"
        style={styles.img}
      ></Image>
    </TouchableOpacity>
    <TouchableOpacity
        style={styles.container}
      >
      <View style={styles.text}>
        <Text style={[global.headline, styles.spacing]}>
          Lorem Ipsum Dolor Amet
        </Text>
      </View>
      <Image
        source={require("../../assets/bg.jpg")}
        resizeMode="cover"
        style={styles.img}
      ></Image>
    </TouchableOpacity>
    <TouchableOpacity
        style={styles.container}
      >
      <View style={styles.text}>
        <Text style={[global.headline, styles.spacing]}>
          Lorem Ipsum Dolor Amet
        </Text>
      </View>
      <Image
        source={require("../../assets/bg.jpg")}
        resizeMode="cover"
        style={styles.img}
      ></Image>
    </TouchableOpacity>
    <TouchableOpacity
        style={styles.container}
      >
      <View style={styles.text}>
        <Text style={[global.headline, styles.spacing]}>
          Lorem Ipsum Dolor Amet
        </Text>
      </View>
      <Image
        source={require("../../assets/bg.jpg")}
        resizeMode="cover"
        style={styles.img}
      ></Image>
    </TouchableOpacity>
      
      </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  picker:{
    // width: 400
  },
  recipients: {
    width:'100%',
    // backgroundColor:'red',
    borderWidth: 0.5,
    paddingHorizontal: 10,
    // paddingTop: 10,
    marginVertical:10,
    borderRadius: 5,
    display:'flex',
    flexDirection:'row',
  },
  email: {
    fontFamily: 'regular',
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#B5B5B5',
    color: '#B5B5B5',
    alignSelf: 'center',
    textAlign: 'center',
    borderRadius:16,
    paddingVertical: 5,
    paddingHorizontal: 10,
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  img: {
    height: 100,
    borderRadius: 5,
    flex: 1,
    marginLeft: 10,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    borderBottomColor: "#B5B5B5",
    paddingBottom: 15,
    marginBottom: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  spacing: {
    marginVertical: 10,
  },
  text: {
    flex: 2.5,
  },
  top: {
    flexDirection: "row",
    alignItems: "center",
  },
});