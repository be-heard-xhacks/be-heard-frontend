import React, { useContext } from "react";
import { Text, View, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { AuthContext } from "../../navigation/AuthProvider.js";
import global from "../../styles.js";

export default function Landing(props) {
  const { login } = useContext(AuthContext);

  return (
    <View>
      {/* <TouchableOpacity onPress={() => login()} style={styles.signinButton}> */}
      {/* <Text>Sign In or Register</Text> */}
      {/* </TouchableOpacity> */}
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("Login");
          console.log("moved to login");
        }}
      ><Text style={styles.button}>Sign In</Text></TouchableOpacity>
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
  button: {
    fontSize:40
  },
});
