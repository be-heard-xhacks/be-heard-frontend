import React, { useContext } from "react";
import { Text, View, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { AuthContext } from "../../navigation/AuthProvider.js";
import MaskedView from "@react-native-community/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import global from "../../styles.js";

export default function Landing(props) {
  const { login } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      {/* <TouchableOpacity onPress={() => login()} style={styles.signinButton}> */}
      {/* <Text>Sign In or Register</Text> */}
      {/* </TouchableOpacity> */}
      <MaskedView
        style={{ height: 100 }}
        maskElement={<Text style={styles.pageTitle}>Be Heard</Text>}
      >
        <LinearGradient
          colors={['#FF9900', '#FF0000']}
          start={{ x: 1, y: 1 }}
          end={{ x: 0, y: 0.33 }}
          style={{ flex: 1 }}
        />
      </MaskedView>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("Login");
          console.log("moved to login");
        }}
      ><Text style={[styles.button1]}>Log In</Text></TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("Register");
          console.log("moved to register");
        }}
      ><Text style={styles.button}>Register</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent:'center',
    alignContent:'center'
  },
  button: {
    fontFamily: 'regular',
    fontSize: 20,
    color: "#FF4B00",
    borderColor: "#FF4B00",
    borderWidth: 1,
    width: 200,
    alignSelf: 'center',
    textAlign: 'center',
    borderRadius:18,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 20
  },
  button1: {
    fontFamily: 'regular',
    overflow: 'hidden',
    fontSize: 20,
    color: "#FF4B00",
    borderColor: "#FF4B00",
    borderWidth: 1,
    width: 200,
    alignSelf: 'center',
    textAlign: 'center',
    borderRadius:18,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor:'#FF4B00',
    color:'white'
  },
  pageTitle: {
    alignSelf: "center",
    fontFamily: "boldfont",
    fontSize: 50,
    // marginTop: 10,
    // flex: 1,
  },
});
