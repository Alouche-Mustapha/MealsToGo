import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "react-native";

import { SafeArea } from "../../components/utility/safe-area.component";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

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
const Settings = () => {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <Button title="Logout" onPress={() => onLogout()}></Button>
    </SafeArea>
  );
};

export const AppNavigator = () => (
  <Tab.Navigator screenOptions={createScreenOptions}>
    <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
    <Tab.Screen
      name="Map"
      component={MapScreen}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name="Settings"
      component={Settings}
      options={{ headerShown: true }}
    />
  </Tab.Navigator>
);
