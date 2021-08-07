import React from "react";
import styles from "../../styles.js";
import { Text, TouchableOpacity, View, SafeAreaView, Button, TextInput } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useEffect } from "react/cjs/react.development";

import * as MailComposer from 'expo-mail-composer';

export default function EmailReps(props) {
  const [subject, onChangeSubject] = React.useState('')
  const [body, onChangeBody] = React.useState('')

  const navigation = useNavigation();
  useEffect(() => {
    props.setDisplay(false)
  });

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
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableOpacity
        onPress={() => {
          props.setDisplay(true)
          navigation.goBack();
        }}
      ><Text>◂</Text></TouchableOpacity>
      <Text>Email Representatives</Text>
      <Text>Subject</Text>
      <TextInput
        style={global.input}
        onChangeText={onChangeSubject}
        value={subject}
        placeholder="Subject"
      />
      <Text>Body</Text>
      <TextInput
        style={global.input}
        onChangeText={onChangeBody}
        value={body}
        placeholder="Body"
      />
      <Button
          title="Email Representatives"
          onPress={emailReps}
        >
      </Button>
    </SafeAreaView>
  );
}
