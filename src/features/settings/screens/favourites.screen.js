import React, { useContext } from "react";
import styled from "styled-components/native";
import { FlatList, Pressable, Text, StatusBar } from "react-native";

import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantInfoCard } from "../../restaurants/components/reataurant-info-card.component";

const NoFavouritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    paddingHorizontal: 15,
  },
})``;

const Space = styled.View`
  padding-bottom: ${(props) => props.theme.space[3]};
`;

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  return favourites.length ? (
    <SafeArea style={{ paddingTop: StatusBar.currentHeight * 2 }}>
      <RestaurantList
        data={favourites}
        renderItem={({ item }) => {
          return (
            <Pressable
              onPress={() =>
                navigation.navigate("RestaurantDetail", {
                  restaurant: item,
                })
              }
            >
              <Space>
                <RestaurantInfoCard restaurant={item} inDetailsScreen={false} />
              </Space>
            </Pressable>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  ) : (
    <NoFavouritesArea>
      <Text>No favourites yet</Text>
    </NoFavouritesArea>
  );
};
