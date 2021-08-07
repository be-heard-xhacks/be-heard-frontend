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

export default function Register(props) {
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const { register } = useContext(AuthContext);
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
      <Text>Register</Text>
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

      <Button title="Register" onPress={() => register(email, password)} />
    </SafeAreaView>
  );
}
