import React, { useState, useEffect, useMemo, createContext } from "react";
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

  const retrieveRestaurants = () => {
    setIsLoading(true); //we are loading data
    // Preventing that we are loading data from real API
    setTimeout(() => {
      //Do a restaurants request(using default location) (dont forget that this is a promise)
      restaurantsRequest() //The component from "restaurants.service.js" that is a promise
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

  /*Run this use effect when component mounts*/
  useEffect(() => {
    retrieveRestaurants();
  }, []);

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
