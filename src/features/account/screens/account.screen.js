import React from "react";
import LottieView from "lottie-react-native";

import {
  AccountBackground,
  AccountContainer,
  AuthButton,
  Title,
  AnimationWrapper,
} from "../components/account.styles";
import { View } from "react-native";

/*This is where to Login or Register to the app*/
export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <Title>Meals To Go</Title>
      <AnimationWrapper>
        <LottieView
          key="animation"
          autoPlay
          resizeMode="cover"
          source={require("../../../../assets/watermelon.json")}
          // OR find more Lottie files @ https://lottiefiles.com/featured
          // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
        />
      </AnimationWrapper>
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
