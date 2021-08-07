import React, { useState } from "react";
import styles from "../../styles.js";
import {
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect } from "react/cjs/react.development";
import { AuthContext } from "../../navigation/AuthProvider.js";

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

  const addSentence = (text) => {
    setSentences([...sentences, text]);
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

            {/* select color here */}
            <TouchableOpacity>
              {/* ONPRESS GENERATES INFOGRAPHIC */}
              <Text>Generate</Text>
            </TouchableOpacity>
          </View>
        );

      case 3: // loading screen for summarization
      // DO API STUFF
      // WAIT TILL IT FINISHES
      // THEN CHANGE BODYPAGE TO 2
    }
  };

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
}

// title
// summarize or write your own (10 sentence limit)
// swipe gallery with preset color
// let user add an image
