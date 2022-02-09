import { StatusBar, Text } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { SafeArea } from "./src/components/utility/safe-area.component";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantsContextProvider } from "./src/services/restaurant/restaurants.context";

/*Create a bottom navigation bar*/
const Tab = createBottomTabNavigator();

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

export default function App() {
  /*Use the wanted fonts and return null if they are not loaded*/
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      {/*Provide a theme for the hole components inside the ThemeProvider component*/}
      <ThemeProvider theme={theme}>
        {/*Provide the context created in "restaurants.context.js" to all the children in the tree*/}
        <RestaurantsContextProvider>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={({ route }) => ({
                /*"focused" arg is used if we want to change the icon when the state is changed*/
                tabBarIcon: ({ color, size }) => {
                  let iconName;
                  if (route.name === "Restaurants") {
                    iconName = "md-restaurant";
                  } else if (route.name === "Settings") {
                    iconName = "md-settings";
                  } else if (route.name === "Map") {
                    iconName = "md-map";
                  }
                  // You can return any component that you like here!
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
                /*Those options ca be used here (general settings) or in "Tab.Screen" as a unique option*/
                tabBarActiveTintColor: "tomato",
                tabBarInactiveTintColor: "gray",
                tabBarActiveBackgroundColor: "#C6DAF7",
                tabBarInactiveBackgroundColor: "#C6DAF7",
                tabBarHideOnKeyboard: true,
                headerShown: false,
              })}
            >
              <Tab.Screen
                name="Restaurants"
                component={RestaurantsScreen}
                options={{ headerShown: true }}
              />
              <Tab.Screen name="Map" component={Map} />
              <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
          </NavigationContainer>
        </RestaurantsContextProvider>
        <StatusBar backgroundColor={theme.colors.brand.primary} />
      </ThemeProvider>
    </>
  );
}
