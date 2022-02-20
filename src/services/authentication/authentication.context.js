import React, { useState, createContext } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { loginRequest } from "./authentication.service";

/*Creating the context*/
export const AuthenticationContext = createContext();

/*The context provider*/
export const AuthenticationContextProvider = ({ children }) => {
  /*The stats that we will provide them with the context as the value*/
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  /*Used to trigger the login function (log a user in and track all of the stat)*/
  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  /*returning the provider*/
  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
