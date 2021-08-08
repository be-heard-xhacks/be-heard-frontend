import { StyleSheet } from "react-native";

export default StyleSheet.create({
  h1: {
    fontFamily: 'boldfont',
    fontSize: 20
  },
  body: {
    fontSize: 16,
    fontFamily: 'regular',
  },
  headline: {
    fontSize: 16,
    fontFamily: 'medium',
  },
  pageTitle: {
    fontFamily: 'medium',
    marginBottom:10, 
    fontSize:20
  },
  srcImg: {
    height: 12,
    width: 25,
    resizeMode: 'contain'
  },
  tag: {
    fontSize: 14,
    fontFamily: 'light',
    color: 'red',
    borderWidth: 1,
    borderColor: 'red',
    alignSelf:'flex-start',
    borderRadius:12,
    paddingVertical: 2,
    paddingHorizontal: 10
  },
  navLabel: {
    alignSelf:'flex-end',
    fontSize: 14,
    fontFamily: 'light'
  },
  topSubtitle: {
    fontSize: 14,
    fontFamily: 'light'
  },
  input:{
    height: 40,
    borderWidth: 0.5,
    padding: 10,
    marginVertical:10,
    borderRadius: 5
  },
  inputLong:{
    height: 200,
    borderWidth: 0.5,
    paddingHorizontal: 10,
    paddingTop: 10,
    marginVertical:10,
    borderRadius: 5
  },
  back:{
    position: 'absolute',
    top: 5,
    left: 10,

    // padding: 10,
    height:50,
    // backgroundColor:'red'
  },
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
    marginTop: 10
  },
  button2: {
    fontFamily: 'medium',
    fontSize: 16,
    backgroundColor: 'white',
    color: "#1F1F1F",
    overflow: 'hidden',
    borderColor: "#1F1F1F",
    borderWidth: 1,
    minWidth: 100,
    alignSelf: 'flex-start',
    textAlign: 'center',
    borderRadius:16,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 10
  }
});
