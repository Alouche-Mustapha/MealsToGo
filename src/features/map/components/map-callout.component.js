import React from "react";
import { CompactRestaurantInfo } from "../../../components/restaurant/compact-restaurant-info.component";

/*Recieve a retaurant as proprety when this restaurant's marker is clicked in the map*/
export const MapCallout = ({ restaurant }) => (
  /*Render this component that containes the informations of a restaurant*/
  <CompactRestaurantInfo restaurant={restaurant} />
);
