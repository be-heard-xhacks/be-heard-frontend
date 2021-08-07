import React from 'react';
import { View, Text, Image, StyleSheet, Touchable, TouchableOpacity} from "react-native";
import global from "../styles.js";


export default function SmallNews(props) {
  return (
    <TouchableOpacity style={styles.container}>
        <View style={styles.text}>
          <Text style={global.topSubtitle}>Spotlighted by Joe Bruin</Text>
          <Text style={[global.headline, styles.spacing]}>Lorem Ipsum Dolor Sit Amet Consec Tetur Adipiscing Elit</Text>
          {/* <Image
            source={require('../assets/source.png')}
            style={global.srcImg}
          ></Image> */}
          <Text style={global.tag}>Label</Text>
        </View>
        <Image
          source={require('../assets/bg.jpg')}
          style={styles.img}
        ></Image>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    img: {
        height:100,
        borderRadius: 5,
        flex: 1,
        marginLeft: 10
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width:'100%',
        borderBottomColor: '#B5B5B5',
        paddingBottom: 15,
        marginBottom:15,
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    spacing: {
        marginVertical: 10
    },
    text: {
        flex:2.5
    }
})