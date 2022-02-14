import React, { useContext, useState, useEffect } from "react";
import { Pressable, Keyboard, Dimensions } from "react-native";
import MapView from "react-native-maps";
import styled from "styled-components/native";

import { Search } from "../components/search.component";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurant/restaurants.context";

/*MapView is what wrap the map in our app*/
const Map = styled(MapView)`
  height: ${Dimensions.get("screen").height}px;
  width: 100%;
`;

const pressed = () => {
  Keyboard.dismiss();
};

export const MapScreen = () => {
  /*We need the location context and restaurants context*/
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);

  /*How close the zoom lvl is going to be on the map*/
  const [latDelta, setLatDelta] = useState(0);

  /*Pull our viewport, lat and lang from the location*/
  const { lat, lng, viewport } = location;

  /*Caculate exactly where we are going to render*/
  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <>
      <Pressable onPress={pressed}>
        <Search />
        <Map
          /*take the lang and lat of the position then put that as the map's region and zoom it with the 
          specified zoom lvl by delta*/
          region={{
            latitude: lat,
            longitude: lng,
            latitudeDelta: latDelta,
            longitudeDelta: 0.02,
          }}
        >
          {/* {" "} */}
          {/*Mapping on the restaurants array and get the item (restaurant)*/}
          {restaurants.map((restaurant) => {
            return null;
          })}
        </Map>
      </Pressable>
    </>
  );
};
