import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AppNavigator } from "./app.navigator";
import { AccountNavigator } from "./account.navigator";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

export const Navigation = () => {
  /*Get the "isAutheticated" from the context*/
  const { isAuthenticated } = useContext(AuthenticationContext);

  /*Check if the user is authenticated by checking if there is a value in it or not (is there a user privided from the context)*/
  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
