import React, { useState, useContext } from "react";
import { Keyboard, KeyboardAvoidingView, Pressable, Text } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";

import {
  AccountBackground,
  AccountContainer,
  AuthButton,
  AuthInput,
  ErrorContainer,
  Title,
} from "../components/account.styles";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");

  const { onRegister, isLoading, error } = useContext(AuthenticationContext);

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
              onChangeText={(p) => setPassword(p)}
            />

            <AuthInput
              label="Repeat Password"
              value={repeatedPassword}
              textContentType="password"
              secureTextEntry
              autoCapitalize="none"
              onChangeText={(p) => setRepeatedPassword(p)}
            />

            <ErrorContainer size="large">
              {error && (
                <Text style={{ color: "red", fontWeight: "bold" }}>
                  {error}
                </Text>
              )}
            </ErrorContainer>

            {!isLoading ? (
              <AuthButton
                icon="email"
                mode="contained"
                onPress={() => onRegister(email, password, repeatedPassword)}
              >
                Register
              </AuthButton>
            ) : (
              <ActivityIndicator
                animating={true}
                color={Colors.blue300}
              ></ActivityIndicator>
            )}
          </AccountContainer>

          <AuthButton mode="contained" onPress={() => navigation.goBack()}>
            Back
          </AuthButton>
        </AccountBackground>
      </KeyboardAvoidingView>
    </Pressable>
  );
};
