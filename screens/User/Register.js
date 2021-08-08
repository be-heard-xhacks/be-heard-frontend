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

export default function Register(props) {
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [firstName, onChangeFirstName] = React.useState("");
  const [lastName, onChangeLastName] = React.useState("");
  const [registered, setRegistered] = React.useState(false);
  const { register, login } = useContext(AuthContext);
  const interests = ['Feminism', 'Politics', 'LGBTQ', 'Economics', 'Tech Equity',
  'Education','Racial Justice','International','Environment',]
  const [selection, setSelection] = React.useState([])
  
  const updateSelection = (choice) => {
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
    return <Text 
      key={item} 
      style={[
        styles.interest, 
        selection.includes(item) ? {color: "#FF4B00", borderColor: "#FF4B00",}:{color: "#B5B5B5", borderColor: "#B5B5B5",}
      ]} 
      onPress={() => updateSelection(item)}>{item}</Text>
  })

  const handleRegister = () => {
    if (selection.length === 0) {
      alert("Must select at least 1 interest!");
      return;
    }
    const profile = {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      interests: selection,
    }
    register(profile)
  }

  return (
    registered ?
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
        <Text style={global.pageTitle}>Interests (choose up to 3)</Text>
        <View style={{flexDirection:'row', flexWrap:'wrap', justifyContent: 'center'}}>
          {displayMessages(interests)}
        </View>
        <TouchableOpacity
        onPress={() => {
          handleRegister
        }}
      ><Text style={styles.button}>Submit Interests</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
    :
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
      <Text style={global.pageTitle}>Welcome to Be Heard</Text>
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
      <TextInput
        style={global.input}
        onChangeText={onChangeFirstName}
        value={firstName}
        placeholder="First Name"
      />
      <TextInput
        style={global.input}
        onChangeText={onChangeLastName}
        value={lastName}
        placeholder="Last Name"
      />

      <TouchableOpacity
        onPress={() => {
          setRegistered(true)
        }}
      ><Text style={styles.button}>Register</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
  
  );
}

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
  interest: {
    fontFamily: 'medium',
    fontSize: 16,
    borderWidth: 1,
    alignSelf: 'center',
    textAlign: 'center',
    borderRadius:16,
    paddingVertical: 5,
    paddingHorizontal: 10,
    margin: 5
  }

})