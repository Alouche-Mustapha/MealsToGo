import React, { useContext } from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { StatusBar, TouchableOpacity } from "react-native";

import { FavouritesContext } from "../../services/favourites/favourites.context";

/*"inDetailsScreen" is a property given by "restaurant.screen.js" or "restaurant-detail.screen.js" to distinct between them*/
export const Favourite = ({ restaurant, inDetailsScreen }) => {
  /*Styled touchableopacity button*/
  const FavouriteButton = styled(TouchableOpacity)`
    position: absolute;
    top: ${inDetailsScreen ? StatusBar.currentHeight + 10 : 15}px;
    right: 20px;
    z-index: 10;
  `;

  /*Pull in our three properties from the context that is an object provided from the favourites context provider*/
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouritesContext);

  /*Tell us if this restaurant existe or not in the array of favourites*/
  const isFavourite = favourites.find((r) => r.placeId === restaurant.placeId);

  return (
    <FavouriteButton
      /*remove or add the restaurant*/
      onPress={() =>
        !isFavourite
          ? addToFavourites(restaurant)
          : removeFromFavourites(restaurant)
      }
    >
      {/*Icon depend on wich the restaurant is in the favourites array or not*/}
      <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        size={32}
        color={isFavourite ? "red" : "white"}
      />
    </FavouriteButton>
  );
};
