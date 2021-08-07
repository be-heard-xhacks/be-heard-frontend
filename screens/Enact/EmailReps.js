import React from "react";
import styles from "../../styles.js";
import { Text, TouchableOpacity, View, SafeAreaView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useEffect } from "react/cjs/react.development";

export default function EmailReps(props) {
  const navigation = useNavigation();
  useEffect(() => {
    props.setDisplay(false)
  });
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableOpacity
        onPress={() => {
          props.setDisplay(true)
          navigation.goBack();
        }}
      ><Text>◂</Text></TouchableOpacity>
      <Text>Email Representatives</Text>
      <Button
          title="Test send email"
          onPress={async () => {
            const available = await MailComposer.isAvailableAsync()
            console.log(available)
            mailOpts = {
              subject: 'Email representatives',
              recipients: ['email'],
              bccrecipients: ['matthewcn56@gmail.com'],
              body: 'hellow orld'
            }
            MailComposer.composeAsync(mailOpts).then(res => {
              console.log(res.status)
            }).catch(err => {
              console.log(err)
            })
            // console.log(res.status)
          }}
        >
      </Button>
    </SafeAreaView>
  );
}
