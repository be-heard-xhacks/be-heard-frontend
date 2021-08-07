import React, { useContext } from "react";
import global from "../../styles.js";
import {
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  TextInput,
  Button,
} from "react-native";

import { AuthContext } from "../../navigation/AuthProvider.js";

import * as MailComposer from 'expo-mail-composer';

export default function Login(props) {
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const { login } = useContext(AuthContext);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("Landing");
          console.log("moved to landing");
        }}
      >
        <Text>◂</Text>
      </TouchableOpacity>
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
        secureTextEntry={true}
        placeholder="Password"
      />

      <Button title="Log In" onPress={() => login(email, password)} />
      <Button
        title="Test Validate"
        onPress={() => {
          testLoginJWT();
        }}
      />
    </SafeAreaView>
  );
}
const testLoginJWT = async () => {
  const tokenStatusResponse = await fetch(
    "http://beheard-env.eba-qxzshfaw.us-west-1.elasticbeanstalk.com/validateToken",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "access-token":
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI2MTBlMTA0ZGI4NTEyYjUxZjFhNWU0N2MiLCJleHAiOjE2MjgzNjk3OTF9.5NSIU3KVJdrcEuOFL4AyREBjWPrITVQPhf1Fh3JEDbI",
      },
    }
  );
  const tokenStatusData = await tokenStatusResponse.json();
  console.log(tokenStatusData);
  const tokenStatus = tokenStatusData.status;
  if (tokenStatus >= 400 || tokenStatusData.message === "token is invalid") {
    console.log("Error signing in!");
    // setIsValidToken(false);
    // setJWTToken(null);
  } else {
    console.log("Successfully signed in");
    //setIsValidToken(true);
  }
};
