import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { AuthProvider } from "./AuthProvider";
import NavigationStack from "./NavigationStack";


export default function Providers() {
  return (
    <AuthProvider>
      <SafeAreaView style={styles.container}>
        <NavigationStack />
      </SafeAreaView>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  pageTitle: {
    alignSelf: 'center',
    fontFamily: 'boldfont',
    fontSize: 32,
    marginTop:5
  }
});