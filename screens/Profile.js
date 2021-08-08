import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../navigation/AuthProvider";
import { Text, View, TouchableOpacity, TextInput, StyleSheet, Button, ScrollView } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import global from "../styles";
import {img} from "../assets/bg.jpg"
import TextGradient from "../components/TextGradient";
import MySpotlight from "../components/MySpotlight";

export default function Profile(props) {
// const navigation = useNavigation();
const { setIsProfile, logout, getCurrentUser } = useContext(AuthContext); 
const [edit, setEdit] = useState(false); 
const [person, setPerson] = useState(
  {
      "firstName": "Joe",
      "lastName": "Bruin",
      "email": "joebruin@gmail.com",
      "posts": [
          {
              "title": "Title One",
              "id": "1",
              "url": "https://www.google.com/",
              "img": "https://www.senate.gov/resources/images/col2_senatefloor.jpg"
          },
          {
              "title": "Title Two",
              "id": "2",
              "url": "https://www.google.com/",
              "img": "https://www.senate.gov/resources/images/col2_senatefloor.jpg"
          },
          {
              "title": "Title Three",
              "id": "3",
              "url": "https://www.google.com/",
              "img": "https://www.senate.gov/resources/images/col2_senatefloor.jpg"
          },
          {
              "title": "Title Four",
              "id": "4",
              "url": "https://www.google.com/",
              "img": "https://www.senate.gov/resources/images/col2_senatefloor.jpg"
          }
      ],
      "interests": ["interest 1", "interest 2", "interest 3"]
  });

useEffect(() => {
  const getPerson = async () => {
    const profile = await getCurrentUser();
    if (profile) {
      setPerson(profile)
    }
  }
  setDisplay(false)
  getPerson()
},[])

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
            setDisplay(true)
            setIsProfile(false)
        }}
        style={global.back}
        hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
      >
          <View>
            <Ionicons name="chevron-back-outline" size={25} color="black" />
          </View>
      </TouchableOpacity>
      <TextGradient
          height={70}
          text="Profile"
          style={styles.title}
        ></TextGradient>
    <View>
    <View style={styles.section}>
        <TextGradient
            height={40}
            text="Information"
            style={styles.subtitle}
        ></TextGradient>
        <Text style={styles.label}>First Name:</Text>
        <Text style={styles.text}>{person.firstName} </Text>
        <Text style={styles.label}>Last Name:</Text>
        <Text style={styles.text}>{person.lastName} </Text>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.text}>{person.email} </Text>
        <Text style={styles.label}>Password:</Text>
        <Text style={[styles.text, , {marginBottom:0}]}>******** </Text>

      </View>
      <View style={styles.section}>
        <TextGradient
          height={40}
          text="Spotlighted Posts"
          style={styles.subtitle}
        ></TextGradient>
        <ScrollView
          horizontal= {true}
          styles={styles.scroll}
          showsHorizontalScrollIndicator={false}
        >
            {person.posts.map((post) => (
                <MySpotlight page={post.title} img={post.img} link={post.url} key={post.id}></MySpotlight>
            ))}
        </ScrollView>
    </View>
    <View style={styles.section}>
        <TextGradient
          height={40}
          text="Interests"
          style={styles.subtitle}
        ></TextGradient>
        <ScrollView
          horizontal= {true}
          styles={styles.scroll}
          showsHorizontalScrollIndicator={false}
        >
            {person.interests.map((interest) => (
                <Text style={[global.tag, {fontSize:16, fontFamily:'regular', marginRight:10}]} key={interest}>
                    {interest}
                </Text>            
            ))}
            
        </ScrollView>
    </View>
    <View style={styles.buttons}>
        {/* <Button onPress={() => {setEdit(true)}} title="Edit Settings" /> */}
        <Button title="Edit Interests" />
        <Button onPress={logout} title="Log Out" />
    </View>
    </View>
    {/* <View>
        <Button title="Save Changes"></Button>
    </View> */}
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
  },
  text:{
    fontSize: 16,
    fontFamily: 'regular',
    marginBottom: 25
  },
  label:{
    fontSize: 16,
    fontFamily: 'bold',
    marginBottom: 5
  },
  section: {
    // height: '10', 
    marginBottom:25,
    minHeight:90
  },
  buttons:{
      flexDirection:'row',
      justifyContent:'space-around'
  }
});
