import React, { useState, useEffect, createContext, useContext } from "react";
import { LocationContext } from "../location/location.context";
import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";

/*Create a context*/
export const RestaurantsContext = createContext();

/*The context provider to wrap the tree of components that need the state context*/
/*The "children" is a object that sould be named like that, so we can display all the children components inside our provider*/
export const RestaurantsContextProvider = ({ children }) => {
  /*By default we have no restaurants, we note loading restaurants, we dont have an error*/
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  /*Give it the location that is not formated as a string ()we have it as an object*/
  const retrieveRestaurants = (loc) => {
    setIsLoading(true); //we are loading data
    setRestaurants([]); // To rernder the component and setLoading to true (load on every search)
    // Preventing that we are loading data from real API
    setTimeout(() => {
      //Do a restaurants request(using default location) (dont forget that this is a promise)
      restaurantsRequest(loc) //The component from "restaurants.service.js" that is a promise
        .then(restaurantsTransform) //The result from above needs to be transformed
        .then((results) => {
          setIsLoading(false); //Set loading to false because we have successfuly got the data
          setRestaurants(results); //After retrieving data and transform it we need to set it
        })
        .catch((error) => {
          setIsLoading(false); //Set loading to false because we are getting an error
          setError(error); //In case of an error we need to set it
        });
    }, 1000);
  };

  /*Run this use effect when component mounts (rerendering RestaurantsContextProvider)*/
  useEffect(() => {
    /*We need a location formed like a string "lang, lat" but we have it like "{lang: ..., lat: ...}"*/
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retrieveRestaurants(locationString);
    }
  }, [location]);

  return (
    /*After loading the restaurants let's provide them to the children*/
    /*
    The value is an object but shorthanded, we can do 
    {restaurants: restaurants, isLoading: isLoading, error: error}, keys and values are the same
    */
    <RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
