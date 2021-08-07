import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity, Linking} from "react-native";
import global from "../styles.js";
import { LinearGradient } from "expo-linear-gradient";


export default function MySpotlight(props) {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={ ()=>{ 
            Linking.openURL(props.link)
                .catch(err => {
                    console.error("Failed opening page because: ", err)
                    alert('Failed to open page')
                })}}>
            <ImageBackground source={{uri: props.img}} resizeMode="cover" style={styles.image}>
                <LinearGradient
                    colors={['rgba(0,0,0,0)', 'rgba(0,0,0,.9)']}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                    style={
                        { flex: 1, justifyContent: 'flex-end', alignItems:'flex-start' }
                    }
                >
                    <View style={styles.text}>
                        <Text style={[global.headline, {color: 'white'}]}>{props.page}</Text>
                        {props.spotlight && <Text style={[global.body, {color: 'white', marginTop: 5}]}>{props.subtitle}</Text>}
                    </View>   
                </LinearGradient>
            </ImageBackground>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    image: {
        // height:100,
        borderRadius: 5,
        overflow:'hidden',
        height: 160,
        width: 160,
        // flex: 1,
        // marginLeft: 10
    },
    container: {
        flex: 1,
        marginRight:10,
        borderRadius: 5,
    },
    text: {
        padding:20,
        alignItems:'center'
    },
})