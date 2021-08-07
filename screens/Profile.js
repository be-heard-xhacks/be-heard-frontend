import React, { useContext } from "react";
import { AuthContext } from "../navigation/AuthProvider";
import { Text, View, TouchableOpacity, TextInput, StyleSheet, Button } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import global from "../styles";
import TextGradient from "../components/TextGradient";

export default function Profile(props) {
// const navigation = useNavigation();
const { setIsProfile, logout } = useContext(AuthContext); 
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
            setIsProfile(false)
        }}
        style={global.back}
      >
          <View>
            <Text></Text>
            <Ionicons name="chevron-back-outline" size={24} color="black" />
          </View>
      </TouchableOpacity>
      <TextGradient
          height={50}
          text="Profile"
          style={styles.title}
        ></TextGradient>
      <FontAwesome name="user-circle" size={125} color="#B5B5B5" style={{alignSelf: 'center', marginVertical: 50}}/>
      <TextGradient
          height={40}
          text="Information"
          style={styles.subtitle}
        ></TextGradient>
        <Text style={global.body}>
            Name: 
        </Text>
      <Button onPress={logout} title="Log Out" />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'white',
    paddingHorizontal: 20
  },
  title: {
    fontFamily: 'boldfont',
    fontSize:30,
    alignSelf:'center',
    marginVertical: 10
  },
  subtitle: {
    fontFamily: 'boldfont',
    fontSize:24,
  }
});
