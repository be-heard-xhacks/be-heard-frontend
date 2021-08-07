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
  const [registered, setRegistered] = React.useState(false);
  const { register, login } = useContext(AuthContext);
  const interests = ['advocacy', 'grassroots', 'feminism', 'politics', 'society',
  'economics','journalism','boycott','policy','government','democracy']
  const [selection, setSelection] = React.useState([])
  
  const updateSelection = (choice) => {
    console.log(selection)
    if (selection.includes(choice)) {
      setSelection(selection.filter((item) => choice !== item))
    } else{
      if (selection.length >= 3) return;
      let newSelection = [...selection]
      newSelection.push(choice)
      setSelection(newSelection)
    }
  }
  const displayMessages = (list) => list.map((item) => {
    return <Text key={item} onPress={() => updateSelection(item)}>{item}</Text>
  })

  const handleRegister = () => {
    if (selection.length === 0) {
      alert("Must select at least 1 interest!");
      return;
    }
    register(email, password, selection)
  }

  return (
    registered ?
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("Landing");
          console.log("moved to landing");
        }}
      >
        <Text>◂</Text>
      </TouchableOpacity>
      <Text>Interests (choose up to 3)</Text>
      {displayMessages(interests)}
      <Button title="Select Interests" onPress={handleRegister} />
    </SafeAreaView>
    :
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
        secureTextEntry={true}
        placeholder="Password"
      />

      <Button title="Register" onPress={() => setRegistered(true)} />
    </SafeAreaView>
  );
}
