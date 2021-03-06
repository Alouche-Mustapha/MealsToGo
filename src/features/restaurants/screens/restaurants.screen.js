import React, { useContext, useState } from "react";
import { FlatList, Pressable, StatusBar } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import styled from "styled-components/native";

import { RestaurantInfoCard } from "../components/reataurant-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurant/restaurants.context";
import { Search } from "../components/search.component";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { FadeInView } from "../../../components/animations/fade.animation";

/*Some styled components that can be used,every styled componenet has an obeject called "props"*/
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

/*This component is used as a screen in a stack navigation so he will get the prop "navigation "
that containes all the properties and listeners*/
export const RestaurantsScreen = ({ navigation }) => {
  /*
  Use the context in this child component. "restaurantsContext" is created in "restaurants.context.js" then we provided an 
  object to it that contains the restaurants list and the state of "loading" and the state of "error", all of that by using
  the declared components in "restaurants.service.js". After that we used the "RestaurantsContextProvider" in "App.js" to
  provide it to all the children, and now the "RestaurantScreen" component is using the context to set up our screen 
  */
  const { restaurants, isLoading } = useContext(RestaurantsContext); //The context is an object with three props
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <SafeArea style={{ paddingTop: StatusBar.currentHeight }}>
      {/*Render the activity indicator will loading the data*/}
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      {/*The search bar on top of the screen that wil l change thye state of isTogged every time the heart icon is clicked*/}
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {/*The list of favorites*/}
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
      {/*This a list that automatically iterate on the data array and renders every item of it*/}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            /*"Pressable is a component that will make what  wrap inside of it able to be pressed"*/
            <Pressable
              onPress={() =>
                /*When navigating to the next screen in the stack we will pass the current restaurant
                  as a property of an object to be able to retieve them in the restaurant detail*/
                navigation.navigate("RestaurantDetail", { restaurant: item })
              }
            >
              <Space>
                {/*
                The "RestaurantInfoCard" have the propretie "restaurant" that is an object that will be given to the default one
                declared in "restaurant-info.component.js", so we need to give hin the "item" that is also an object from the 
                array "restaurants"
              */}
                <FadeInView>
                  <RestaurantInfoCard
                    restaurant={item}
                    inDetailsScreen={false}
                  />
                </FadeInView>
              </Space>
            </Pressable>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
