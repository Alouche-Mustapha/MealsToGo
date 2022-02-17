import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

/*Create the context that is going to hold the favourites*/
export const FavouritesContext = createContext();

/*The provider that going to wrap "app.js" in order to supply the favourites to the tree*/
export const FavouritesContextProvider = ({ children }) => {
  /*The favourites as an array*/
  const [favourites, setFavourites] = useState([]);

  /*Save the favorites array in local storage*/
  const saveFavourites = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@favourites", jsonValue);
    } catch (e) {
      console.log("Error storing", e);
    }
  };

  /*Load the favourites array from local storage*/
  const loadFavourites = async () => {
    try {
      const value = await AsyncStorage.getItem("@favourites");
      if (value !== null) {
        setFavourites(JSON.parse(value));
      }
    } catch (e) {
      console.log("Error loading", e);
    }
  };

  /*Function to add a restaurant (argument) to our favourites (array of objects)*/
  const add = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };

  /*Remove a restaurant from favourites*/
  const remove = (restaurant) => {
    /*"filter()" is a function that executes a function for every item in the array*/
    /*It provides (currentValue, index) so we are using the "x" as current value*/
    const newFavourites = favourites.filter(
      (x) => x.placeId !== restaurant.placeId
    );

    setFavourites(newFavourites);
  };

  /*Load the favourites on the very first mount of our context*/
  useEffect(() => {
    loadFavourites();
  }, []);

  /*Save the favourites every time the array is updated*/
  useEffect(() => {
    saveFavourites(favourites);
  }, [favourites]);

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFavourites: add,
        removeFromFavourites: remove,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
