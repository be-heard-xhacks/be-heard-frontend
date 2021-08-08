import React from "react";
import { Text, TouchableOpacity, View, SafeAreaView, StyleSheet, Touchable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react/cjs/react.development";
import { AuthContext } from "../../navigation/AuthProvider.js";
import global from "../../styles.js";
import { Ionicons } from "@expo/vector-icons";
import {Picker} from '@react-native-picker/picker';

export default function GenerateLinktree(props) {
  const navigation = useNavigation();
  const { setDisplay } = useContext(AuthContext);
  useEffect(() => {
    setDisplay(false);
  }, []);
  const [selectedTopic, setSelectedTopic] = useState();
  const [isChecked, setChecked] = useState(false);

  const interests = ['Feminism', 'Politics', 'LGBTQ', 'Economics', 'Tech Equity',
  'Education','Racial Justice','International','Environment',]
  return (
    <SafeAreaView style={{backgroundColor:'white', flex:1}}>
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
      <Text style={global.pageTitle}>Generate Linktree</Text>
      <Text style={[global.headline, {marginVertical:20}]}>Filter By Topic</Text>
      <Picker
        // style={styles.picker} 
        selectedValue={selectedTopic}
        onValueChange={(itemValue) =>
          setSelectedTopic(itemValue)
        }>
      {interests.map((s) => (<Picker.Item label={s} value={s} key={s}></Picker.Item>))}
      </Picker>
      <Text style={global.headline}>Select Components</Text>
      <View style={styles.container}>
      <View style={styles.section}>
        <TouchableOpacity
          style={styles.checkbox}
        />
        <Text style={global.body}>Articles</Text>
      </View>
      <View style={styles.section}>
        <TouchableOpacity
          style={styles.checkbox}
        />
        <Text style={global.body}>Podcasts</Text>
      </View>
      <View style={styles.section}>
        <TouchableOpacity
          style={styles.checkbox}
        />
        <Text style={global.body}>Petitions</Text>
      </View>
      <View style={styles.section}>
        <TouchableOpacity
          style={styles.checkbox}
        />
        <Text style={global.body}>Donations</Text>
      </View>
    </View>

      <TouchableOpacity
      ><Text style={global.button}>Generate Linktree</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    marginRight: 15,
    width: 20,
    height:20,
    borderColor: '#FF4B00',
    borderWidth: 1
  },
});