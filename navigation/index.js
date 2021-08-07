import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { AuthProvider } from "./AuthProvider";
import NavigationStack from "./NavigationStack";

import MaskedView from "@react-native-community/masked-view";
import { LinearGradient } from "expo-linear-gradient";


export default function Providers() {
  return (
    <AuthProvider>
      <SafeAreaView style={styles.container}>
        {/* <Text style={styles.pageTitle}>Be Heard</Text> */}
        <MaskedView
          style={{ height: 32 }}
          maskElement={<Text style={styles.pageTitle}>Be Heard</Text>}
        >
          <LinearGradient
            colors={['#FF0000', '#FF9900']}
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0.33 }}
            style={{ flex: 1 }}
          />
        </MaskedView>
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