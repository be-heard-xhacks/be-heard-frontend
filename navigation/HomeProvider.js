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
  console.log("User token from home provider is: " + userToken);

  const updateInterests = async () => {
    if (userToken) {
      const interests = await fetch(apiKeys.SERVER_BASE_URL + "/getInterests", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "access-token": userToken,
        },
      });
      setInterests(interests);
    } else setInterests([]);
  };

  useEffect(() => {
    const grabArticles = async () => {
      console.log("Fetching articles...");
      if (userToken && interests) {
        const newArticles = await fetch(
          apiKeys.SERVER_BASE_URL + "/getArticles",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "access-token": userToken,
            },
          }
        );
        setArticles(newArticles);
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
