import React, { useContext } from "react";
import global from "../../styles.js";
import {
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  TextInput,
  Button,
  StyleSheet
} from "react-native";
import { Ionicons } from '@expo/vector-icons';

import { AuthContext } from "../../navigation/AuthProvider.js";

export default function Login(props) {
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const { login } = useContext(AuthContext);
  return (
    <SafeAreaView style={{backgroundColor:'white', height:'100%', justifyContent: 'center'}}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("Landing");
          console.log("moved to landing");
        }}
        style={{height: 40, width:40, position: 'absolute', top: 0, left: 10}}
        hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
      >
          <View>
            <Ionicons name="chevron-back-outline" size={25} color="black" />
          </View>
      </TouchableOpacity>
      <View style={{marginHorizontal: 40}}>
      <Text style={global.pageTitle}>Welcome Back</Text>
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

      <TouchableOpacity
        onPress={() => {
          login(email, password)
        }}
      ><Text style={styles.button}>Log In</Text></TouchableOpacity>

      {/* <Button
        title="Test Validate"
        onPress={() => {
          testLoginJWT();
        }}
      /> */}
      </View>
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

const styles = StyleSheet.create({
  button: {
    fontFamily: 'medium',
    fontSize: 16,
    backgroundColor: '#FF4B00',
    color: "white",
    overflow: 'hidden',
    borderColor: "#FF4B00",
    borderWidth: 1,
    minWidth: 100,
    alignSelf: 'center',
    textAlign: 'center',
    borderRadius:16,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 20
  },

})
