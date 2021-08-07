import React, { createContext } from "react";
// import { login, logout } from "../firebase/firebaseFunctions";
import { useState, useEffect } from "react";
export const AuthContext = createContext({});
import AsyncStorage from "@react-native-async-storage/async-storage";
import apiKeys from "../config/apiKeys";
import { encode } from "base-64";

//status:401 if invalid token
const getJWTToken = async () => {
  try {
    const value = await AsyncStorage.getItem("@BE_HEARD_JWT_TOKEN");
    console.log("JWT Token Is: " + value);
    return value;
  } catch (e) {
    console.log("ERROR GETTING TOKEN");
  }
};

const setJWTToken = async (value) => {
  try {
    const jsonValue = value ? JSON.stringify(value) : "";
    await AsyncStorage.setItem("@BE_HEARD_JWT_TOKEN", jsonValue);
    console.log("Successfully set storage to: " + jsonValue);
  } catch (e) {
    console.log("ERROR SETTING TOKEN");
    console.log(e);
  }
};

export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState("");
  const [isValidToken, setIsValidToken] = useState(false);
  const [display, setDisplay] = useState(true);

  /*grab the token from storage when app first mounts, and attempt logging in thru
  our useEffect */
  useEffect(() => {
    const grabToken = async () => {
      const storageToken = await getJWTToken();
      setUserToken(storageToken);
    };
    grabToken();
  }, []);

  //function to login the user
  const login = async (user, pass) => {
    console.log("Basic " + encode(user + ":" + pass));
    const tokenStatusResponse = await fetch(
      apiKeys.SERVER_BASE_URL + "/login",
      {
        method: "POST",
        headers: {
          Authorization: "Basic " + encode(user + ":" + pass),
        },
      }
    );
    const tokenStatusData = await tokenStatusResponse.json();
    const tokenStatus = tokenStatusData.status;
    if (
      tokenStatus >= 400 ||
      tokenStatusData.message === "Invalid username or password"
    ) {
      console.log("Error signing in!");
      alert("Invalid username or password");
      setIsValidToken(false);
      setJWTToken("");
    } else {
      console.log("Successfully signed in");
      setJWTToken(tokenStatusData["jwt_token"]);
      setUserToken(tokenStatusData["jwt_token"]);
      setIsValidToken(true);
    }
  };

  //TODO: FIX ERROR MESSAGE
  //function to register the user
  const register = async (user, pass) => {
    console.log("user is: " + user);
    console.log("pass is:" + pass);
    console.log(
      JSON.stringify({
        email: user,
        password: pass,
      })
    );
    const registerResponse = await fetch(
      apiKeys.SERVER_BASE_URL + "/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user,
          password: pass,
        }),
      }
    );

    const registerResponseData = await registerResponse.json();
    console.log(registerResponseData);
    const registerStatus = registerResponseData.status;
    if (
      registerStatus > 400 ||
      registerResponseData.message === "Error, email is taken"
    ) {
      alert("This email is already taken!");
    } else {
      alert("User has been successfully registered!");
      //TODO: Add in route navigation to log-in screen afterwards pls
    }
  };

  //useEffect to track if the jwt token is valid
  useEffect(() => {
    const attemptLoginJWT = async () => {
      if (!userToken) {
        setIsValidToken(false);
      } else if (userToken && !isValidToken) {
        console.log("attempting log-in with: " + userToken);
        const tokenStatusResponse = await fetch(
          apiKeys.SERVER_BASE_URL + "/validateToken",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "access-token": userToken,
            },
          }
        );
        const tokenStatusData = await tokenStatusResponse.json();
        console.log(tokenStatusData);
        const tokenStatus = tokenStatusData.status;
        if (
          tokenStatus >= 400 ||
          tokenStatusData.message === "token is invalid"
        ) {
          console.log("Error signing in!");
          setIsValidToken(false);
          setJWTToken("");
        } else {
          console.log("Successfully signed in");
          setIsValidToken(true);
        }
      }
    };
    attemptLoginJWT();
  }, [userToken]);

  const logout = async () => {
    console.log("Logging out...");
    await setJWTToken("");
    setUserToken("");
  };
  return (
    <AuthContext.Provider
      value={{
        userToken,
        isValidToken,
        login: login,
        logout: logout,
        register: register,
        display: display,
        setDisplay: setDisplay,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
