import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../navigation/AuthProvider";
import styles from "../../styles.js";
import {
  Text,
  View,
  Button,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function EnactScreen(props) {
  const { user, logout } = useContext(AuthContext);
  const [userName, setUserName] = useState("");
  const [profilePic, setProfilePic] = useState(null);

  // useEffect(() => {
  //   setUserName(user.displayName);
  //   setProfilePic(user.photoURL);
  // }, []); //ComponentDidMount

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
      //contentContainerStyle={styles.scroll}
      // refreshControl={
      //   <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      // }
      >
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("Create Spotlight", {});
              console.log("moved to create spotlight");
            }}
          >
            <Text>Spotlight Content</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("Email Representatives");
              console.log("moved to email representatives");
            }}
          >
            <Text>Email Representatives</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("Sign Petitions");
              console.log("moved to sign petitions");
            }}
          >
            <Text>Sign Petitions</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("Generate Linktree");
              console.log("moved to generate linktree");
            }}
          >
            <Text>Generate Linktree</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("Generate Infographics");
              console.log("moved to generate infographics");
            }}
          >
            <Text>Generate Infographics</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

/* <View style={styles.container}>
      <Text>Welcome {userName}</Text>
      <Image style={styles.profileImage} source={{ uri: profilePic }} />
      <Button onPress={logout} title="Log Out" />
      </View>
*/
