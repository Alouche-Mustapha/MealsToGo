import React, { useContext } from "react";
import { FlatList } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import styled from "styled-components/native";

import { RestaurantInfoCard } from "../components/reataurant-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurant/restaurants.context";
import { Search } from "../components/search.component";

/*Some styled components that can be used,every styled componenet has an obejtct called "props"*/
const Space = styled.View`
  padding-bottom: ${(props) => props.theme.space[3]};
`;

/*
"RestaurantsLis" is a styled component created from a "FlatList" recat native component
We can access the component's attributs by the function "attrs()" as an object
*/
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    paddingHorizontal: 15,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = () => {
  /*
  Use the context in this child component. "restaurantsContext" is created in "restaurants.context.js" then we provided an 
  object to it that contains the restaurants list and the state of "loading" and the state of "error", all of that by using
  the declared components in "restaurants.service.js". After that we used the "RestaurantsContextProvider" in "App.js" to
  provide it to all the children, and now the "RestaurantScreen" component is using the context to set up our screen 
  */
  const { restaurants, isLoading, error } = useContext(RestaurantsContext); //The context is an object with three props
  return (
    <SafeArea>
      {/*Render the activity indicator will loading the data*/}
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      {/*The search abr on top of the screen*/}
      <Search />
      {/*This a list that automatically iterate on the data array and renders every item of it*/}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <Space>
              {/*
            The "RestaurantInfoCard" have the propretie "restaurant" that is an object that will be given to the default one
            declared in "restaurant-info.component.js", so we need to give hin the "item" that is also an object from the 
            array "restaurants"
            */}
              <RestaurantInfoCard restaurant={item} />
            </Space>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
