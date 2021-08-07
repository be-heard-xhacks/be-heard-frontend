import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity} from "react-native";
import global from "../styles.js";
import { LinearGradient } from "expo-linear-gradient";


export default function EnactButton(props) {
  return (
    <View style={styles.container}>
            <ImageBackground source={props.img} resizeMode="cover" style={styles.image}>
                <LinearGradient
                    colors={props.spotlight ? ['#FF0000', '#FF9900']:['rgba(0,0,0,0)', 'rgba(0,0,0,.9)']}
                    start={props.spotlight ? { x: 0, y: 0.5 }:{ x: 0.5, y: 0 }}
                    end={props.spotlight?{ x: 1, y: 0.5 }:{ x: 0.5, y: 1 }}
                    style={props.spotlight? 
                        { flex: 1, justifyContent: 'center', alignItems:'center' } :
                        { flex: 1, justifyContent: 'flex-end', alignItems:'flex-start' }
                    }
                >
                    <View style={styles.text}>
                        <Text style={[global.h1, {color: 'white'}]}>{props.page}</Text>
                        {props.spotlight && <Text style={[global.body, {color: 'white', marginTop: 5}]}>{props.subtitle}</Text>}
                    </View>   
                </LinearGradient>
            </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
    image: {
        // height:100,
        borderRadius: 5,
        overflow:'hidden',
        height: 133,
        // flex: 1,
        // marginLeft: 10
    },
    container: {
        flex: 1,
        marginBottom:10,
        borderRadius: 5,
    },
    text: {
        padding:20,
        alignItems:'center'
    },
})