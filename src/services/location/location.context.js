import React, { useState, useEffect } from "react";
import { locationRequest, locationTransform } from "./location.service";

/*Create a context an export it*/
export const LocationContext = React.createContext();

/*The provider that will provide a value to the context*/
export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("san francisco");
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (searchKeyword) => {
    setIsLoading(true);
    setKeyword(searchKeyword);
    //console.log(searchKeyword);
  };

  useEffect(() => {
    if (!keyword.length) {
      // don't do anything if the searchbar is empty
      return;
    }
    locationRequest(keyword.toLowerCase().trim())
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
        //console.log(result);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

/*
This file will act like "restaurants.context.js"
*/
