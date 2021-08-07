import { StyleSheet } from "react-native";

export default StyleSheet.create({
  h1: {
    fontFamily: 'boldfont',
  //   fontSize: 22
  // },
  // h2: {
  //   fontFamily: 'boldfont',
    fontSize: 20
  },
  headline: {
    fontSize: 16,
    fontFamily: 'medium',
  },
  srcImg: {
    height: 15,
    width: 40,
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
    fontSize: 12,
    fontFamily: 'light'
  },
  input:{
    height: 40,
    borderWidth: 0.5,
    padding: 10,
  }
});
