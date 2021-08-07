import React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  RefreshControl,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ReadingSchedule from "./ReadingSchedule";

export default function EducateScreen(props) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
      //contentContainerStyle={styles.scroll}
      // refreshControl={
      //   <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      // }
      >
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("ReadingSchedule", {});
              console.log("moved to reading schedule");
            }}
          >
            <Text>Today's Pick</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("Spotlighted");
              console.log("moved to spotlighted");
            }}
          >
            <Text>Spotlighted</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("For You");
              console.log("moved to for you");
            }}
          >
            <Text>For You</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("Headlines");
              console.log("moved to headlines");
            }}
          >
            <Text>Headlines</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
