import React, { createContext, useState, useContext, useEffect } from "react";
import { useReducer } from "react/cjs/react.production.min";
export const HomeContext = createContext({});
import apiKeys from "../config/apiKeys";
import { AuthContext } from "./AuthProvider";

export const HomeProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const { userToken } = useContext(AuthContext);
  const [interests, setInterests] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    updateInterests();
  }, [user]);
  const updateInterests = async () => {
    if (userToken) {
      const newInterestsResponse = await fetch(
        apiKeys.SERVER_BASE_URL + "/getInterests",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "access-token": userToken,
          },
        }
      );
      const newInterests = await newInterestsResponse.json();
      const interestArray = newInterests.interests;
      console.log(interestArray);
      console.log("Interest 1 is: " + interestArray[0]);
      setInterests(interestArray);
    } else {
      console.log("Initial");
      setInterests([]);
    }
  };

  useEffect(() => {
    const grabArticles = async () => {
      console.log("Articles is: ");
      if (userToken && interests.length > 0) {
        console.log("Interests are: " + interests);
        console.log("Fetching articles...");
        const newArticlesResponse = await fetch(
          apiKeys.SERVER_BASE_URL + "/getArticles",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "access-token": userToken,
            },
          }
        );
        const newArticlesMessage = await newArticlesResponse.json();
        const newArticles = newArticlesMessage.data;
        setArticles(newArticles);
        console.log("New articles are: ") + newArticles;
      }
    };
    grabArticles();
    //SHOULD INTERESTS BE IN ARRAY?
  }, [userToken, interests]);

  return (
    <HomeContext.Provider
      value={{
        interests,
        updateInterests,
        articles,
        user,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
