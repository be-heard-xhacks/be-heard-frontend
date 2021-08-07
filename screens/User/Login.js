import React from "react";
import global from "../../styles.js";
import { Text, TouchableOpacity, View, SafeAreaView, TextInput } from "react-native";

export default function Login(props) {
    const [email, onChangeEmail] = React.useState("");
    const [password, onChangePassword] = React.useState("");
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("Landing");
          console.log("moved to landing");
        }}
      ><Text>◂</Text></TouchableOpacity>
      <Text>Login</Text>
      <TextInput
        style={global.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="Email"
      />
      <TextInput
        style={global.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder="Password"
      />
    </SafeAreaView>
  );
}
