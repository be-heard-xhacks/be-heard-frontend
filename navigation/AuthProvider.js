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
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("@BE_HEARD_JWT_TOKEN", jsonValue);
  } catch (e) {
    console.log("ERROR SETTING TOKEN");
  }
};

export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(getJWTToken);
  const [isValidToken, setIsValidToken] = useState(false);

  const login = async (user,pass) => {
    const tokenStatusResponse = await fetch(
      apiKeys.SERVER_BASE_URL + "/login",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: user,
          password: pass
        })
        }
    );
      }
    );
    const tokenStatusData = await tokenStatusResponse.json();
    const tokenStatus = tokenStatusData.status;
    if (tokenStatus > 400) {
      console.log("Error signing in!");
      setIsValidToken(false);
    }
  };
  const logout = () => {};
  return (
    <AuthContext.Provider
      value={
        {
          // user,
          // setUser,
          // login: login,
          // logout: logout,
        }
      }
    >
      {children}
    </AuthContext.Provider>
  );
};
