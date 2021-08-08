import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  TextInput,
  Touchable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect } from "react/cjs/react.development";
import { AuthContext } from "../../navigation/AuthProvider.js";
import Swiper from "react-native-swiper";
import apiKeys from "../../config/apiKeys";

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
          <View style={{ flexDirection: "row", flex: 1 }}>
            <TouchableOpacity onPress={() => setBodyPage(1)}>
              <Text>Summarize Text</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setBodyPage(2)}>
              <Text>Manually Write Content</Text>
            </TouchableOpacity>
          </View>
        );
      case 1: // summarize
        return (
          <View>
            <Text>Insert source text:</Text>
            <TextInput
              style={global.input}
              onChangeText={setTextToSummarize}
              value={textToSummarize}
              placeholder="Insert text to summarize"
            />
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity onPress={() => setBodyPage(0)}>
                <Text>Go Back</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setBodyPage(3)}>
                <Text>Summarize</Text>
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
              placeholder="Insert a sentence"
              key={i}
            />
          ));
        };
        return (
          <View>
            {inputs()}
            {sentences.length < 10 && (
              <TouchableOpacity onPress={() => addSentence("")}>
                <Text>Add a sentence</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity onPress={() => setEditing(false)}>
              {/* ONPRESS GENERATES INFOGRAPHIC */}
              <Text>Generate</Text>
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
      <SafeAreaView style={{ flex: 1 }}>
        <TouchableOpacity
          onPress={() => {
            setDisplay(true);
            navigation.goBack();
          }}
        >
          <Text>◂</Text>
        </TouchableOpacity>
        <Text>Generate Infographic</Text>
        <Text>Title:</Text>
        <TextInput
          style={global.input}
          onChangeText={setTitle}
          value={title}
          placeholder="Insert Title"
        />
        <Text>Body:</Text>
        {bodyInput()}
      </SafeAreaView>
    );
  else
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <TouchableOpacity
          onPress={() => {
            setDisplay(true);
            navigation.goBack();
          }}
        >
          <Text>◂</Text>
        </TouchableOpacity>
        <Text>Generate Infographic</Text>
        <Text>{title}</Text>
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
        <TouchableOpacity onPress={async () => sendInfograph()}>
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
          <Text>create new infographic</Text>
        </TouchableOpacity>
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
    backgroundColor: "#9DD6EB",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
};
