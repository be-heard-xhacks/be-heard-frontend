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
  const [isProfile, setIsProfile] = useState(false);
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
    const res = await fetch(apiKeys.SERVER_BASE_URL + "/login", {
      method: "POST",
      headers: {
        Authorization: "Basic " + encode(user + ":" + pass),
      },
    });
    console.log(res.status);
    if (res.status >= 400) {
      console.log("Error signing in!");
      alert("Invalid username or password");
      setIsValidToken(false);
      setJWTToken("");
    } else {
      const tokenStatusData = await res.json();
      console.log("Successfully signed in");
      setJWTToken(tokenStatusData["jwt_token"]);
      setUserToken(tokenStatusData["jwt_token"]);
      setIsValidToken(true);
    }
  };

  //TODO: FIX ERROR MESSAGE
  //function to register the user
  const register = async (profile) => {
    const { email, password } = profile;
    console.log(JSON.stringify(profile));
    const registerResponse = await fetch(
      apiKeys.SERVER_BASE_URL + "/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profile),
      }
    );

    const registerResponseData = await registerResponse.json();
    console.log(registerResponseData);
    if (registerResponse.status > 400) {
      alert("This email is already taken!");
    } else {
      alert("User has been successfully registered!");
      await login(email, password);
    }
  };

  const getCurrentUser = async () => {
    const res = await fetch(apiKeys.SERVER_BASE_URL + "/getUser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "access-token": userToken,
      },
    });
    if (res.status === 200) {
      const json = await res.json();
      const profile = json.profile;
      profile.posts = [];
      return profile;
    }
    return null;
  };

  //useEffect to track if the jwt token is valid
  useEffect(() => {
    const attemptLoginJWT = async () => {
      if (!userToken) {
        setIsValidToken(false);
      } else if (userToken && !isValidToken) {
        console.log("attempting log-in with: " + userToken);
        const res = await fetch(apiKeys.SERVER_BASE_URL + "/validateToken", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "access-token": userToken,
          },
        });
        console.log(res.status);
        const tokenStatusData = await res.json();
        console.log(tokenStatusData);
        if (res.status >= 400) {
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
        isProfile: isProfile,
        setIsProfile: setIsProfile,
        login: login,
        logout: logout,
        register: register,
        getCurrentUser: getCurrentUser,
        display: display,
        setDisplay: setDisplay,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
