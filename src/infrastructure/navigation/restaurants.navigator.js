import React from "react";
import { Text } from "react-native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";

/*Create a stack navigator to stack screens*/
const RestaurantStack = createStackNavigator();

/*RestaurantsNavigator is a bottomTbaNavigatorScreen (restaurants, map, settings) and it contains
a stack navigator that will allow us to switch between screens is the same bottom Nav option*/
export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator /*screenOptions={{ headerShown: false }}*/
      screenOptions={{ ...TransitionPresets.BottomSheetAndroid }}
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
        component={() => <Text>The details</Text>}
      />
    </RestaurantStack.Navigator>
  );
};
