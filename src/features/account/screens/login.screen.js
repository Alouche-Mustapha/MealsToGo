import React, { useState, useContext } from "react";
import { Keyboard, KeyboardAvoidingView, Pressable, Text } from "react-native";

import {
  AccountBackground,
  AccountContainer,
  AuthButton,
  AuthInput,
  ErrorContainer,
  Title,
} from "../components/account.styles";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  /*Pull the onLogin and the error from the context*/
  const { onLogin, error } = useContext(AuthenticationContext);

  return (
    <Pressable
      style={{ flex: 1 }}
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <AccountBackground>
          <Title>Meals To Go</Title>
          <AccountContainer>
            <AuthInput
              label="E-mail"
              value={email}
              textContentType="emailAddress"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={(u) => setEmail(u)}
            />
            <AuthInput
              label="Password"
              value={password}
              textContentType="password"
              secureTextEntry
              autoCapitalize="none"
              secure
              onChangeText={(p) => setPassword(p)}
            />

            <ErrorContainer size="large">
              {error && (
                <Text style={{ color: "red", fontWeight: "bold" }}>
                  {error}
                </Text>
              )}
            </ErrorContainer>

            <AuthButton
              icon="lock-open-outline"
              mode="contained"
              onPress={() => onLogin(email, password)}
            >
              Login
            </AuthButton>
            <AuthButton mode="contained" onPress={() => navigation.goBack()}>
              Back
            </AuthButton>
          </AccountContainer>
        </AccountBackground>
      </KeyboardAvoidingView>
    </Pressable>
  );
};
