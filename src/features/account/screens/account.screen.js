import React from "react";

import {
  AccountBackground,
  AccountContainer,
  AuthButton,
} from "../components/account.styles";

/*This is where to Login or Register to the app*/
export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          Login
        </AuthButton>
        <AuthButton
          icon="email-outline"
          onPress={() => {
            navigation.navigate("Register");
          }}
        >
          Register
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};
