import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  TextInput,
  Touchable,
} from "react-native";
import global from "../../styles.js";
import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect } from "react/cjs/react.development";
import { AuthContext } from "../../navigation/AuthProvider.js";
import Swiper from "react-native-swiper";
import apiKeys from "../../config/apiKeys";
import { Ionicons } from "@expo/vector-icons";

export default function GenerateInfo(props) {
  const navigation = useNavigation();
  const { setDisplay } = useContext(AuthContext);
  useEffect(() => {
    setDisplay(false);
  }, []);

  const [title, setTitle] = useState("");
  const [bodyPage, setBodyPage] = useState(0);
  const [textToSummarize, setTextToSummarize] = useState("");
  const [sentences, setSentences] = useState([]);
  const [color, setColor] = useState("#ff9966");
  const [editing, setEditing] = useState(true);

  const addSentence = (text) => {
    setSentences([...sentences, text]);
  };

  const summarizeText = async () => {
    console.log("summarizing text");
    const modelResponse = await fetch(
      apiKeys.NLP_SERVER_BASE_URL + "/testmodel",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          article: textToSummarize,
        }),
      }
    );
    const summaryJson = await modelResponse.json();
    let summary = summaryJson.msg[0] + " ";
    summary = summary.substring(1, summary.length).split(" . ");
    console.log(summary);
    setSentences(summary);
    setBodyPage(2);
  };

  const bodyInput = () => {
    switch (bodyPage) {
      case 0: // not selected
        return (
          <View
            style={{ flexDirection: "row", flex: 1, justifyContent: "center" }}
          >
            <TouchableOpacity
              style={{ marginRight: 10 }}
              onPress={() => setBodyPage(1)}
            >
              <Text style={global.button}>Summarize Text</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setBodyPage(2)}>
              <Text style={global.button}>Manually Write Content</Text>
            </TouchableOpacity>
          </View>
        );
      case 1: // summarize
        return (
          <View>
            {/* <Text style={global.body}>Insert source text:</Text> */}
            <TextInput
              style={global.inputLong}
              onChangeText={setTextToSummarize}
              value={textToSummarize}
              multiline={true}
              numberOfLines={5}
              placeholder="Insert text to summarize"
            />
            <View style={{ flexDirection: "row" }}>
              {/* <TouchableOpacity onPress={() => setBodyPage(0)}>
                <Text style={global.button}>Go Back</Text>
              </TouchableOpacity> */}
              <TouchableOpacity onPress={() => setBodyPage(3)}>
                <Text style={global.button}>Summarize</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      case 2: // manual, or after summarizing
        const inputs = () => {
          if (sentences.length === 0) addSentence("");

          return sentences.map((s, i) => (
            <TextInput
              style={global.input}
              onChangeText={(text) => {
                let temp = sentences;
                temp[i] = text;
                setSentences([...temp]);
              }}
              value={s}
              placeholder="Insert text"
              key={i}
            />
          ));
        };
        return (
          <View>
            {inputs()}
            {sentences.length < 10 && (
              <TouchableOpacity onPress={() => addSentence("")}>
                <Text style={global.button2}>Add Slide</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity onPress={() => setEditing(false)}>
              {/* ONPRESS GENERATES INFOGRAPHIC */}
              <Text style={global.button}>Generate</Text>
            </TouchableOpacity>
          </View>
        );

      case 3:
        // loading screen for summarization

        summarizeText();
    }
  };

  const renderInfographic = () => {
    return sentences.map((s) => {
      if (s.length > 0)
        return (
          <View style={styles.slide}>
            <Text style={styles.text}>{s}</Text>
          </View>
        );
    });
  };

  const { userToken } = useContext(AuthContext);
  const sendInfograph = async () => {
    console.log("sending infographic");
    const response = await fetch(
      apiKeys.SERVER_BASE_URL + "/storeInfographic",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "access-token": userToken,
        },
        body: JSON.stringify({
          title: title,
          sentences: sentences,
          sponsored: true,
        }),
      }
    );
    const responseData = await response.json();
    console.log(responseData.message);
  };

  if (editing)
    return (
      <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
        <TouchableOpacity
          onPress={() => {
            setDisplay(true);
            navigation.goBack();
          }}
          style={{
            height: 40,
            width: 40,
            position: "absolute",
            top: 0,
            left: 10,
          }}
          hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
        >
          <View>
            <Ionicons name="chevron-back-outline" size={25} color="black" />
          </View>
        </TouchableOpacity>
        <View style={{ flex: 1, margin: 20, marginTop: 50 }}>
          <Text style={global.pageTitle}>Generate Infographic</Text>
          <Text style={global.body}>Title:</Text>
          <TextInput
            style={global.input}
            onChangeText={setTitle}
            value={title}
            placeholder="Insert Title"
          />
          <Text style={global.body}>Body:</Text>
          {bodyInput()}
        </View>
      </SafeAreaView>
    );
  else
    return (
      <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
        <TouchableOpacity
          onPress={() => {
            setDisplay(true);
            navigation.goBack();
          }}
          style={{
            height: 40,
            width: 40,
            position: "absolute",
            top: 0,
            left: 10,
          }}
          hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
        >
          <View>
            <Ionicons name="chevron-back-outline" size={25} color="black" />
          </View>
        </TouchableOpacity>
        <View style={{ flex: 1, margin: 20, marginTop: 50 }}>
          <Text style={global.pageTitle}>Generate Infographic</Text>
          <Text style={global.body}>{title}</Text>
          <Swiper
            style={styles.wrapper}
            loop={false}
            dot={
              <View
                style={{
                  backgroundColor: "rgba(255,255,255,.3)",
                  width: 13,
                  height: 13,
                  borderRadius: 7,
                  marginLeft: 7,
                  marginRight: 7,
                }}
              />
            }
            activeDot={
              <View
                style={{
                  backgroundColor: "#fff",
                  width: 13,
                  height: 13,
                  borderRadius: 7,
                  marginLeft: 7,
                  marginRight: 7,
                }}
              />
            }
            paginationStyle={{
              bottom: 70,
            }}
            loop={false}
          >
            {renderInfographic()}
          </Swiper>
          <TouchableOpacity
            style={global.button}
            onPress={async () => sendInfograph()}
          >
            <Text>save</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setEditing(true);
              setBodyPage(0);
              setTitle("");
              setTextToSummarize("");
              setSentences([]);
            }}
          >
            <Text style={global.button}>Create New Infographic</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
}

// title
// summarize or write your own (10 sentence limit)
// swipe gallery with preset color
// let user add an image

var styles = {
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1F1F1F",
    // width: 10,
    borderRadius: 5,
    marginVertical: 20,
  },
  text: {
    color: "#FF4B00",
    fontSize: 30,
    fontWeight: "bold",
  },
};
