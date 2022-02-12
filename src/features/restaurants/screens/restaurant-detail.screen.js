import React, { useState } from "react";
import { List } from "react-native-paper";

import { RestaurantInfoCard } from "../components/reataurant-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { ScrollView } from "react-native";

/*
When we press a restaurant card we will tell it to navigate to restaurant detail by giving it the
route name, at this moment we can also pass some data with it as params 
*/
export const RestaurantDetailScreen = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);
  /*The data that we need to pull (given by the route)*/
  const { restaurant } = route.params;
  return (
    <SafeArea>
      {/*Restaurant card on top of the screen*/}
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView style={{ marginTop: 10 }}>
        <List.Accordion
          title="Breakfast"
          titleStyle={{ color: "white" }}
          style={{
            backgroundColor: "#2182BD",
          }}
          left={() => <List.Icon color="white" icon="bread-slice" />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title="Eggs Benedict" />
          <List.Item title="Classic Breakfast" />
        </List.Accordion>

        <List.Accordion
          title="Lunch"
          titleStyle={{ color: "white" }}
          style={{
            backgroundColor: "#2182BD",
            borderTopColor: "white",
            borderTopWidth: 1,
          }}
          left={() => <List.Icon color="white" icon="hamburger" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Burger w/ Fries" />
          <List.Item title="Steak Sandwich" />
          <List.Item title="Mushroom Soup" />
        </List.Accordion>

        <List.Accordion
          title="Dinner"
          titleStyle={{ color: "white" }}
          style={{
            backgroundColor: "#2182BD",
            borderTopColor: "white",
            borderTopWidth: 1,
          }}
          left={() => (
            <List.Icon
              color={!dinnerExpanded ? "blck" : "white"}
              icon="food-variant"
            />
          )}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="Spaghetti Bolognese" />
          <List.Item title="Veal Cutlet with Chicken Mushroom Rotini" />
          <List.Item title="Steak Frites" />
        </List.Accordion>

        <List.Accordion
          title="Drinks"
          titleStyle={!drinksExpanded ? { color: "white" } : { color: "black" }}
          style={
            !drinksExpanded
              ? {
                  backgroundColor: "#2182BD",
                  borderTopWidth: 1,
                  borderBottomWidth: 1,
                  borderColor: "white",
                }
              : {
                  backgroundColor: "#2182BD",
                  borderTopWidth: 1,
                  borderColor: "white",
                }
          }
          left={() => (
            <List.Icon color={!drinksExpanded ? "white" : "black"} icon="cup" />
          )}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title="Coffee" titleStyle={{ color: "white" }} />
          <List.Item title="Tea" titleStyle={{ color: "white" }} />
          <List.Item title="Modelo" titleStyle={{ color: "white" }} />
          <List.Item title="Coke" titleStyle={{ color: "white" }} />
          <List.Item title="Fanta" titleStyle={{ color: "white" }} />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};
