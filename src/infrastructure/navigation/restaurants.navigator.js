import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurant-detail.screen";
import { Platform } from "react-native";

/*Create a stack navigator to stack screens*/
const RestaurantStack = createStackNavigator();

const isAndroid = Platform.OS === "android" ? true : false;

/*RestaurantsNavigator is a bottomTbaNavigatorScreen (restaurants, map, settings) and it contains
a stack navigator that will allow us to switch between screens is the same bottom Nav option*/
export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator /*screenOptions={{ headerShown: false }}*/
      screenOptions={{
        ...TransitionPresets.ModalFadeTransition,
        headerShown: false,
      }}
    >
      {/*The initial screen of a stack navigation is waht we render first */}
      <RestaurantStack.Screen
        name="Restaurant"
        /*Any components that are in the "component" property are guaranteed to get the prop "navigation"*/
        component={RestaurantsScreen}
        options={{ headerShown: false }}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};
