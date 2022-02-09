import { SafeAreaView } from "react-native";
import styled from "styled-components/native";

/*
We created the "SafeArea" component to have the ability to use it in every screen in our app,
to make it looks good in IOS phones
*/
export const SafeArea = styled(SafeAreaView)`
  flex: 1; /*the flex 1 means that the SafeAreaView will take the entire height*/
  background-color: ${(props) => props.theme.colors.brand.primary};
`;

/*
margin-top: ${StatusBar.currentHeight}px : Thsi will cause an error because that ios do not support it
${StatusBar.currentHright && `margin-top: ${StatusBar.currentHeight}px`} : this means that if 
"StatusBar.currentHeight" has a value (because it is only supported on android) that means that we are 
on android phones, then you can apply a "margin-top" 
*/
