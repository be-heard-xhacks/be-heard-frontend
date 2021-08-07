import React, { createContext } from "react";
// import { login, logout } from "../firebase/firebaseFunctions";
import { useState, useEffect } from "react";
export const AuthContext = createContext({});
import AsyncStorage from "@react-native-async-storage/async-storage";
import apiKeys from "../apiKeys";

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

  useEffect(() => {
    const grabToken = async () => {
      const storageToken = await getJWTToken();
      setUserToken(storageToken);
    };
    grabToken();
  }, []);
  const login = async (user, pass) => {
    const tokenStatusResponse = await fetch(
      apiKeys.SERVER_BASE_URL + "/login",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: window.btoa(user + ":" + pass),
        },
      }
    );
    const tokenStatusData = await tokenStatusResponse.json();
    const tokenStatus = tokenStatusData.status;
    if (tokenStatus >= 400) {
      console.log("Error signing in!");
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

  useEffect(() => {
    if (userToken) {
      const attemptLoginJWT = async () => {
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
          setJWTToken(null);
        } else {
          console.log("Successfully signed in");
          setIsValidToken(true);
        }
      };

      attemptLoginJWT();
    }
  }, [userToken]);

  const logout = () => {};
  return (
    <AuthContext.Provider
      value={{
        // user,
        // setUser,
        login: login,
        // logout: logout,
        register: register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
