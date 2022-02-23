import styled from "styled-components/native";
import { colors } from "../../../infrastructure/theme/colors";
import { Button, TextInput } from "react-native-paper";
import { Dimensions, Text } from "react-native";

/*The background to set it to the login, register and account screens. attrs are the props that we need to use*/
export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/home_bg.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

/*The contaimer that will wrap the inputs*/
export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.5);
  padding-horizontal: ${(props) => props.theme.space[3]};
  padding-top: ${(props) => props.theme.space[3]};
  margin-vertical: ${(props) => props.theme.space[3]};
`;

/*We need to import "colors" to make the button attrs acces to them, but the styled component already has the prop "props" that containe the theme*/
export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
  mode: "contained",
})`
  padding: ${(props) => props.theme.space[2]};
  margin-bottom: 15px;
  border-radius: 50px;
  width: ${Dimensions.get("screen").width * 0.5}px;
  align-self: center;
`;

export const AuthInput = styled(TextInput).attrs({ mode: "outlined" })`
  width: ${Dimensions.get("screen").width * 0.85}px;
  margin-top: 10px;
`;

export const Title = styled(Text)`
  font-size: 50px;
  font-family: "Oswald_400Regular";
  margin-bottom: 20px;
`;

export const ErrorContainer = styled.View`
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[3]};
  margin-bottom: ${(props) => props.theme.space[3]};
`;

export const AnimationWrapper = styled.View`
  width: 100%;
  height: 50%;
  position: absolute;
  top: 0%;
}}
`;
