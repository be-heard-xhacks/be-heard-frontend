import React from "react";
import global from "../../styles.js";
import { Text, TouchableOpacity, View, SafeAreaView, StyleSheet, ImageBackground, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect } from "react/cjs/react.development";
import { AuthContext } from "../../navigation/AuthProvider.js";
import { Ionicons } from "@expo/vector-icons";
import MySpotlight from "../../components/MySpotlight.js";
import { LinearGradient } from "expo-linear-gradient";

export default function CreateSpotlight(props) {
  const navigation = useNavigation();
  const { setDisplay } = useContext(AuthContext);
  useEffect(() => {
    setDisplay(false);
  }, []);

  return (
    <SafeAreaView style={{backgroundColor:'white', height:'100%'}}>
      <TouchableOpacity
        onPress={() => {
          setDisplay(true);
          navigation.goBack();
        }}
        style={{height: 40, width:40, position: 'absolute', top: 0, left: 10}}
        hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
      >
          <View>
            <Ionicons name="chevron-back-outline" size={25} color="black" />
          </View>
      </TouchableOpacity>
      <View style={{ flex: 1, margin: 20, marginTop: 50 }}>
      <Text style={global.pageTitle}>Create Spotlight</Text>
      <Text style={[global.headline, {marginVertical:20}]}>Choose a post to spotlight.</Text>
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <TouchableOpacity>
              <ImageBackground source={require("../../assets/bg.jpg")} resizeMode="cover" style={styles.image}>
                  <LinearGradient
                      colors={['rgba(0,0,0,0)', 'rgba(0,0,0,.9)']}
                      start={{ x: 0.5, y: 0 }}
                      end={{ x: 0.5, y: 1 }}
                      style={
                          { flex: 1, justifyContent: 'flex-end', alignItems:'flex-start' }
                      }
                  >
                      <View style={styles.text}>
                          <Text style={[global.headline, {color: 'white'}]}>Lorem Ipsum Dolor</Text>
                      </View>   
                  </LinearGradient>
              </ImageBackground>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <TouchableOpacity>
              <ImageBackground source={require("../../assets/bg.jpg")} resizeMode="cover" style={styles.image}>
                  <LinearGradient
                      colors={['rgba(0,0,0,0)', 'rgba(0,0,0,.9)']}
                      start={{ x: 0.5, y: 0 }}
                      end={{ x: 0.5, y: 1 }}
                      style={
                          { flex: 1, justifyContent: 'flex-end', alignItems:'flex-start' }
                      }
                  >
                      <View style={styles.text}>
                          <Text style={[global.headline, {color: 'white'}]}>Lorem Ipsum Dolor</Text>
                      </View>   
                  </LinearGradient>
              </ImageBackground>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <TouchableOpacity>
              <ImageBackground source={require("../../assets/bg.jpg")} resizeMode="cover" style={styles.image}>
                  <LinearGradient
                      colors={['rgba(0,0,0,0)', 'rgba(0,0,0,.9)']}
                      start={{ x: 0.5, y: 0 }}
                      end={{ x: 0.5, y: 1 }}
                      style={
                          { flex: 1, justifyContent: 'flex-end', alignItems:'flex-start' }
                      }
                  >
                      <View style={styles.text}>
                          <Text style={[global.headline, {color: 'white'}]}>Lorem Ipsum Dolor</Text>
                      </View>   
                  </LinearGradient>
              </ImageBackground>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <TouchableOpacity>
              <ImageBackground source={require("../../assets/bg.jpg")} resizeMode="cover" style={styles.image}>
                  <LinearGradient
                      colors={['rgba(0,0,0,0)', 'rgba(0,0,0,.9)']}
                      start={{ x: 0.5, y: 0 }}
                      end={{ x: 0.5, y: 1 }}
                      style={
                          { flex: 1, justifyContent: 'flex-end', alignItems:'flex-start' }
                      }
                  >
                      <View style={styles.text}>
                          <Text style={[global.headline, {color: 'white'}]}>Lorem Ipsum Dolor</Text>
                      </View>   
                  </LinearGradient>
              </ImageBackground>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <TouchableOpacity>
              <ImageBackground source={require("../../assets/bg.jpg")} resizeMode="cover" style={styles.image}>
                  <LinearGradient
                      colors={['rgba(0,0,0,0)', 'rgba(0,0,0,.9)']}
                      start={{ x: 0.5, y: 0 }}
                      end={{ x: 0.5, y: 1 }}
                      style={
                          { flex: 1, justifyContent: 'flex-end', alignItems:'flex-start' }
                      }
                  >
                      <View style={styles.text}>
                          <Text style={[global.headline, {color: 'white'}]}>Lorem Ipsum Dolor</Text>
                      </View>   
                  </LinearGradient>
              </ImageBackground>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <TouchableOpacity>
              <ImageBackground source={require("../../assets/bg.jpg")} resizeMode="cover" style={styles.image}>
                  <LinearGradient
                      colors={['rgba(0,0,0,0)', 'rgba(0,0,0,.9)']}
                      start={{ x: 0.5, y: 0 }}
                      end={{ x: 0.5, y: 1 }}
                      style={
                          { flex: 1, justifyContent: 'flex-end', alignItems:'flex-start' }
                      }
                  >
                      <View style={styles.text}>
                          <Text style={[global.headline, {color: 'white'}]}>Lorem Ipsum Dolor</Text>
                      </View>   
                  </LinearGradient>
              </ImageBackground>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <TouchableOpacity>
              <ImageBackground source={require("../../assets/bg.jpg")} resizeMode="cover" style={styles.image}>
                  <LinearGradient
                      colors={['rgba(0,0,0,0)', 'rgba(0,0,0,.9)']}
                      start={{ x: 0.5, y: 0 }}
                      end={{ x: 0.5, y: 1 }}
                      style={
                          { flex: 1, justifyContent: 'flex-end', alignItems:'flex-start' }
                      }
                  >
                      <View style={styles.text}>
                          <Text style={[global.headline, {color: 'white'}]}>Lorem Ipsum Dolor</Text>
                      </View>   
                  </LinearGradient>
              </ImageBackground>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <TouchableOpacity>
              <ImageBackground source={require("../../assets/bg.jpg")} resizeMode="cover" style={styles.image}>
                  <LinearGradient
                      colors={['rgba(0,0,0,0)', 'rgba(0,0,0,.9)']}
                      start={{ x: 0.5, y: 0 }}
                      end={{ x: 0.5, y: 1 }}
                      style={
                          { flex: 1, justifyContent: 'flex-end', alignItems:'flex-start' }
                      }
                  >
                      <View style={styles.text}>
                          <Text style={[global.headline, {color: 'white'}]}>Lorem Ipsum Dolor</Text>
                      </View>   
                  </LinearGradient>
              </ImageBackground>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <TouchableOpacity>
              <ImageBackground source={require("../../assets/bg.jpg")} resizeMode="cover" style={styles.image}>
                  <LinearGradient
                      colors={['rgba(0,0,0,0)', 'rgba(0,0,0,.9)']}
                      start={{ x: 0.5, y: 0 }}
                      end={{ x: 0.5, y: 1 }}
                      style={
                          { flex: 1, justifyContent: 'flex-end', alignItems:'flex-start' }
                      }
                  >
                      <View style={styles.text}>
                          <Text style={[global.headline, {color: 'white'}]}>Lorem Ipsum Dolor</Text>
                      </View>   
                  </LinearGradient>
              </ImageBackground>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <TouchableOpacity>
              <ImageBackground source={require("../../assets/bg.jpg")} resizeMode="cover" style={styles.image}>
                  <LinearGradient
                      colors={['rgba(0,0,0,0)', 'rgba(0,0,0,.9)']}
                      start={{ x: 0.5, y: 0 }}
                      end={{ x: 0.5, y: 1 }}
                      style={
                          { flex: 1, justifyContent: 'flex-end', alignItems:'flex-start' }
                      }
                  >
                      <View style={styles.text}>
                          <Text style={[global.headline, {color: 'white'}]}>Lorem Ipsum Dolor</Text>
                      </View>   
                  </LinearGradient>
              </ImageBackground>
          </TouchableOpacity>
        </View>
      </ScrollView>
      </View>
      <TouchableOpacity
      ><Text style={global.button}>Spotlight</Text></TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
      // height:100,
      borderRadius: 5,
      overflow:'hidden',
      height: 160,
      // width: 160,
      // flex: 1,
      // marginLeft: 10
  },
  container: {
      flex: 1,
      margin:10,
      borderRadius: 5,
  },
  text: {
      padding:20,
      alignItems:'center'
  },
  scroll:{
    // flexDirection: 'row'
  }
})