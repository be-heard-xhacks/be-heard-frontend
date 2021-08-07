import React, { useContext } from "react";
import global from "../../styles.js";
import {
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Button,
} from "react-native";

import { AuthContext } from "../../navigation/AuthProvider.js";

export default function Login(props) {
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const { login } = useContext(AuthContext);
  
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
      <Text>Interests</Text>
      {displayMessages(interests)}
      <Button title="Select Interests" onPress={() => login(email, password)} />
    </SafeAreaView>
  );
}