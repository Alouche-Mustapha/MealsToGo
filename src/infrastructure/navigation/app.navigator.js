import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";

import { SafeArea } from "../../components/utility/safe-area.component";
import { RestaurantsNavigator } from "./restaurants.navigator";

/*Create a bottom navigation bar*/
const Tab = createBottomTabNavigator();

/*obejct to hold all the wanted icons*/
const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

/*To make the code looks better we have cteared this function outside of the main component*/
const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    /*These options can be used here or with the attibute options for a unique tab screen*/
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
    tabBarActiveBackgroundColor: "#C6DAF7",
    tabBarInactiveBackgroundColor: "#C6DAF7",
    tabBarHideOnKeyboard: true,
    headerShown: false,
  };
};

/*Placeholder for the settings screen*/
const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);

/*Placeholder for the map screen*/
const Map = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator screenOptions={createScreenOptions}>
      <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
      <Tab.Screen name="Map" component={Map} options={{ headerShown: true }} />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{ headerShown: true }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);
