import React from "react";
import styled from "styled-components/native";
import WebView from "react-native-webview";
import { Platform, Text } from "react-native";

/*Working only for IOS*/
const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

/*Working on android (because the first one is not working)*/
const CompactWebview = styled(WebView)`
  width: 120px;
  height: 100px;
  border-top-left-radius: 20px;
`;

/*The item that wrap all the informations*/
const Item = styled.View`
  max-width: 120px;
  align-items: center;
  border-radius: 10px;
`;

/*If the platfom OS is android*/
const isAndroid = Platform.OS === "android";

export const CompactRestaurantInfo = ({ restaurant, isMap }) => {
  const Image = isAndroid && isMap ? CompactWebview : CompactImage;

  return (
    <Item>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Text numberOfLines={3} style={{ textAlign: "center" }}>
        {restaurant.name}
      </Text>
    </Item>
  );
};
