import React from "react";
import { Text, TouchableOpacity, View, SafeAreaView, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect } from "react/cjs/react.development";
import { AuthContext } from "../../navigation/AuthProvider.js";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { Ionicons } from "@expo/vector-icons";


export default function ReadingSchedule(props) {
  const navigation = useNavigation();
  const { setDisplay } = useContext(AuthContext);
  useEffect(() => {
    setDisplay(false);
  }, []);
  return (
    <ScrollView style={{backgroundColor:'white'}}>

      <TouchableOpacity
          onPress={() => {
            setDisplay(true);
            navigation.goBack();
          }}
          style={{height: 40, width:40, position: 'absolute', top: 0, left: 10}}
          hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
        >
            <View>
              <Ionicons name="chevron-back-outline" size={25} color="black" />
            </View>
        </TouchableOpacity>
        
      <SafeAreaView style={{ flex: 1, margin: 20, marginTop: 50 }}>
      <Text>Reading Schedule</Text>
      <View style={{ paddingTop: 50, flex: 1 }}>
        <Calendar
          // Initially visible month. Default = Date()
          current={"2021-08-07"}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={"2021-08-01"}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate={"2022-05-30"}
          // Handler which gets executed on day press. Default = undefined
          onDayPress={(day) => {
            console.log("selected day", day);
          }}
          // Handler which gets executed on day long press. Default = undefined
          onDayLongPress={(day) => {
            console.log("selected day", day);
          }}
          // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
          disableAllTouchEventsForDisabledDays={true}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={"yyyy MM"}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={(month) => {
            console.log("month changed", month);
          }}
          // Hide month navigation arrows. Default = false
          hideArrows={false}
          // Do not show days of other months in month page. Default = false
          // Replace default arrows with custom ones (direction can be 'left' or 'right')
          renderArrow={(direction) => (
            <Text>{direction === "left" ? "<" : ">"}</Text>
          )}
          hideExtraDays={true}
          // If hideArrows=false and hideExtraDays=false do not swich month when tapping on greyed out
          // day from another month that is visible in calendar page. Default = false
          disableMonthChange={true}
          // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
          firstDay={1}
          // Enable the option to swipe between months. Default = false
          enableSwipeMonths={true}
        />
      </View>
    </SafeAreaView>
    </ScrollView>
  );
}
