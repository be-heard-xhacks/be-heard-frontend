import React from "react";
import global from "../../styles.js";
import { Text, TouchableOpacity, View, SafeAreaView, Button, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect } from "react/cjs/react.development";
import { AuthContext } from "../../navigation/AuthProvider.js";
import { Ionicons } from "@expo/vector-icons";
import * as MailComposer from 'expo-mail-composer';

export default function EmailReps(props) {
  const [subject, onChangeSubject] = React.useState('')
  const [body, onChangeBody] = React.useState('')

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
      <Text style={global.pageTitle}>Email Representatives</Text>
      <Text>Subject</Text>
      <TextInput
        style={global.input}
        onChangeText={onChangeSubject}
        value={subject}
        placeholder="Subject"
      />
      <Text>Body</Text>
      <TextInput
        style={global.inputLong}
        onChangeText={onChangeBody}
        value={body}
        multiline={true}
        numberOfLines={6}
        placeholder="Body"
      />
      <TouchableOpacity
        onPress={emailReps}
      ><Text style={global.button}>Send Emails</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
