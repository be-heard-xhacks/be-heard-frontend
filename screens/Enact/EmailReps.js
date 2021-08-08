import React, { useState } from "react";
import global from "../../styles.js";
import { Text, TouchableOpacity, View, SafeAreaView, Button, TextInput, Modal, StyleSheet, Pressable, Alert, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect } from "react/cjs/react.development";
import { AuthContext } from "../../navigation/AuthProvider.js";
import { Ionicons } from "@expo/vector-icons";
import * as MailComposer from 'expo-mail-composer';
import {Picker} from '@react-native-picker/picker';
import { AntDesign } from '@expo/vector-icons'; 


export default function EmailReps(props) {
  const [subject, onChangeSubject] = useState('')
  const [body, onChangeBody] = useState('')
  const [selectedState, setSelectedState] = useState();
  const [selectedTopic, setSelectedTopic] = useState();


  const navigation = useNavigation();
  const { setDisplay } = useContext(AuthContext);
  useEffect(() => {
    setDisplay(false);
  }, []);

  const emailReps = async () => {
    const available = await MailComposer.isAvailableAsync()
    console.log(available)
    const mailOpts = {
      subject: subject,
      recipients: ['email'],
      bccrecipients: ['matthewcn56@gmail.com'],
      body: body
    }
    const res = await MailComposer.composeAsync(mailOpts)
    console.log(res.status)
    // MailComposer.composeAsync(mailOpts).then(res => {
    //   console.log(res.status)
    // }).catch(err => {
    //   console.log(err)
    // })
  }
  const states =["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"]
  const interests = ['Feminism', 'Politics', 'LGBTQ', 'Economics', 'Tech Equity',
  'Education','Racial Justice','International','Environment',]
  let recipients = ["joebruin@gmail.com","joe@aol.com","joebruin@gmail.com","joebruin@gmail.com","joebruin@gmail.com","joebruin@gmail.com","joebruin@gmail.com","joebruin@gmail.com","joebruin@gmail.com","joebruin@gmail.com","joebruin@gmail.com","joebruin@gmail.com","joebruin@gmail.com","joebruin@gmail.com","joebruin@gmail.com","joebruin@gmail.com","joebruin@gmail.com", ]
  
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <SafeAreaView style={{backgroundColor:'white', height:'100%'}}>

      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          onChangeSubject(selectedTopic)
          onChangeBody(selectedTopic)
          setModalVisible(!modalVisible);
        }}
      >
        <View style={[styles.centeredView, , {backgroundColor: modalVisible?'rgba(0, 0, 0, 0.5)':'white'}]}>
          <View style={styles.modalView}>
            <View>
      <Text style={global.headline}>Select State</Text>
      <Picker
        style={styles.picker} 
        selectedValue={selectedState}
        onValueChange={(itemValue) =>
          setSelectedState(itemValue)
        }>
        
      {states.map((s) => (<Picker.Item label={s} value={s} key={s}></Picker.Item>))}
      </Picker>
      {/* <Text style={global.headline}>Select Topic</Text>
      <Picker
        style={styles.picker}
        selectedValue={selectedTopic}
        onValueChange={(itemValue) =>
          setSelectedTopic(itemValue)
        }>
      {interests.map((s) => (<Picker.Item label={s} value={s} key={s}></Picker.Item>))}
      </Picker> */}
      </View>
      
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={global.button2}>Draft</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

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
      <Text style={global.pageTitle}>Email Representatives</Text>
      <Text >Recipients</Text>
      <View style={{height: 80}}>
        <ScrollView
        style={styles.recipients}
        horizontal={true}
      >
        {recipients.map((s) => (
          <View style={styles.email}>
            <Text style={{color: '#B5B5B5', fontFamily: 'regular',
    fontSize: 14, marginRight: 3}} key={s.index} >{s}</Text>
        <TouchableOpacity
        onPress={() => {
          recipients.splice(s.index, 1);
        }}
        hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
      >
        <AntDesign name="close" size={14} color="#B5B5B5" />
      </TouchableOpacity>
          
          </View>
          ))}
      </ScrollView>
      </View>
      
      <Text>Subject</Text>
      <TextInput
        style={global.input}
        onChangeText={onChangeSubject}
        value={subject}
        placeholder={subject}
      />
      <Text >Body</Text>
      <TextInput
        style={[global.inputLong, {height: 450}]}
        onChangeText={onChangeBody}
        value={body}
        multiline={true} 
        numberOfLines={4}
        placeholder={body}
      />
      <TouchableOpacity
        onPress={emailReps}
      ><Text style={global.button}>Send Emails</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 35,
    alignItems: "center",
    width: '70%',
  },
  picker:{
    width: 200
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
  }
});