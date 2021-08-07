import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity} from "react-native";
import global from "../styles.js";
import { LinearGradient } from "expo-linear-gradient";


export default function BigNews(props) {
  return (
    <TouchableOpacity style={styles.container}>
        <ImageBackground source={require('../assets/bg.jpg')} resizeMode="cover" style={styles.image}>
            <LinearGradient
                colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']}
                start={{ x: 1, y: 1 }}
                end={{ x: 0, y: 0.33 }}
                style={{ flex: 1 }}
            >
            <View style={styles.text}>
                    <View style={styles.top}>
                        <Image
                            source={require('../assets/source.png')}
                            style={global.srcImg}
                        ></Image>
                        <Text style={global.topSubtitle}> •  5 hours ago</Text>
                    </View>
                    <Text style={[global.headline, styles.spacing]}>Lorem Ipsum Dolor Sit Amet Consec Tetur Adipiscing Elit</Text>
                    <Text style={global.tag}>Label</Text>
                </View>   
            </LinearGradient>
        </ImageBackground>
        {/* <Image
          source={require('../assets/bg.jpg')}
          style={styles.img}
        ></Image> */}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    image: {
        // height:100,
        // borderRadius: 5,
        // flex: 1,
        // marginLeft: 10
    },
    container: {
        paddingBottom: 15,
        marginBottom:15,
        borderRadius: 5
    },
    spacing: {
        marginVertical: 10
    },
    text: {
        padding:20,
    },
    top: {
        flexDirection: 'row',
        alignItems: 'center',
    }
})