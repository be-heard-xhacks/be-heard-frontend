import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
// import { LinearTextGradient } from "react-native-text-gradient";
import { AuthProvider } from "./AuthProvider";
import NavigationStack from "./NavigationStack";

export default function Providers() {
  return (
    <AuthProvider>
      <SafeAreaView style={styles.container}>
      {/* <LinearTextGradient
          style={styles.pageTitle}
          locations={[0, 1]}
          colors={['red', 'blue']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          THIS IS TEXT GRADIENT
        </LinearTextGradient> */}
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
  }
});