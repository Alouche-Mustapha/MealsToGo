import React, { useContext, useEffect, useState } from "react";
import { Dimensions, Keyboard, Pressable } from "react-native";
import MapView from "react-native-maps";
import styled from "styled-components/native";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurant/restaurants.context";
import { MapCallout } from "../components/map-callout.component";
import { Search } from "../components/search.component";

/*MapView is what wrap the map in our app*/
const Map = styled(MapView)`
  height: ${Dimensions.get("screen").height}px;
  width: 100%;
`;

const pressed = () => {
  Keyboard.dismiss();
};

export const MapScreen = ({ navigation }) => {
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
          {/*Mapping on the restaurants array and get the item (restaurant)*/}
          {restaurants.map((restaurant) => {
            /*This is where we are going to render the detail view*/
            return (
              <MapView.Marker
                key={restaurant.name}
                /*The title on top of the marker (map call out)*/
                title={restaurant.name}
                /*The coordinates where the pin is going to render*/
                coordinate={{
                  latitude: restaurant.geometry.location.lat,
                  longitude: restaurant.geometry.location.lng,
                }}
              >
                {/*Outside the "MapView.Callout" the informations are not going to render as a tooltip but as the marker itself*/}
                {/*Where to render the tolltips for each item*/}
                <MapView.Callout
                  onPress={() =>
                    navigation.navigate("RestaurantDetail", { restaurant })
                  }
                >
                  <MapCallout restaurant={restaurant} />
                </MapView.Callout>
              </MapView.Marker>
            );
          })}
        </Map>
      </Pressable>
    </>
  );
};
