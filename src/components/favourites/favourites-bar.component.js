import React from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component";

/*The styled component that will wrap our favourites list*/
const FavouritesWrapper = styled.View`
  padding-horizontal: 15px;
  padding-bottom: 15px;
`;

const Title = styled.Text`
  padding-bottom: 10px;
  font-weight: bold;
  font-size: 20px;
`;

export const FavouritesBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <FavouritesWrapper>
      <Title variant="caption">Favourites</Title>
      {/*Those two properties that are given to the scrollview are necessary to make the items render horizontaly*/}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <TouchableOpacity
              style={{ marginRight: 10 }}
              key={key}
              onPress={() =>
                onNavigate("RestaurantDetail", {
                  restaurant,
                })
              }
            >
              <CompactRestaurantInfo restaurant={restaurant} />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};
