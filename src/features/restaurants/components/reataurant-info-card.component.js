import React from "react";
import { Image, Text, View } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";

import star from "../../../../assets/star";
import open from "../../../../assets/open";
import closed from "../../../../assets/closed";
import { Favourite } from "../../../components/favourites/favourite.component";

/*Create a styled component with the name 'Title' as a 'Text' from 'StyledComponents'*/
const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

/*Create a styled component with the name 'RestaurantCard' as a 'Card' from 'react-native-paper'*/
const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.brand.muted};
  border-radius: 15px;
`;

const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.secondary};
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Section = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Rating = styled.View`
  flex-direction: row;
  padding-vertical: ${(props) => props.theme.space[2]};
`;

const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const RestaurantInfoCard = ({ restaurant = {}, inDetailsScreen }) => {
  /*
  This const in an object that is directly initialized with some initial data.
  If the 'restaurant' object had some propreties with the same name as the initial data, they will
  override them.
  we can access the object's propreties just by name because we didnt declare this object then
  initialize him with some data (no name given to it)
  */
  const {
    name = "Some Restaurant",
    icon = "https://img2.freepng.fr/20180511/qkw/kisspng-monumental-restaurant-logo-cafe-5af54f48cfbed6.7759304615260260568509.jpg",
    photos = [
      "https://media-cdn.tripadvisor.com/media/photo-s/1a/08/d9/91/salle-du-restaurant.jpg",
    ],
    address = "Some random address",
    isOpenNow,
    rating = 4,
    isClosedTemporarily = false,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <Favourite restaurant={restaurant} inDetailsScreen={inDetailsScreen} />
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <Rating>
            {ratingArray.map((_, index) => (
              <SvgXml
                key={`start-${placeId}-${index}`} //just to give each start a unique id
                xml={star}
                width={20}
                height={20}
              />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text
                style={{
                  color: "red",
                  fontWeight: "bold",
                }}
              >
                Closed Temporarily
              </Text>
            )}
            {isOpenNow ? (
              <SvgXml
                xml={open}
                width={20}
                height={20}
                style={{ marginLeft: 15 }}
              />
            ) : (
              <SvgXml
                xml={closed}
                width={20}
                height={20}
                style={{ marginLeft: 15 }}
              />
            )}
            <Image
              source={{ uri: icon }}
              style={{
                width: 20,
                resizeMode: "cover",
                marginLeft: 15,
              }}
            />
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
