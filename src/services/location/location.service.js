import camelize from "camelize";
import { locations } from "./location.mock";

/*Get the request and interact with the API (we are just mimicking)*/
export const locationRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) {
      reject("not found");
    }
    resolve(locationMock);
  });
};

/*Transform the request*/
export const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  /*
  "formattedResponse.results[0]" is an object with bunch of properties but we need just "geometry" so
  we have to assign it to an object that has only one property with the same name of the wanted one
  and we need also to initialize it to an empty object
  */
  const { geometry = {} } = formattedResponse.results[0];
  /* 
  Same as what we said previousely, we declare an object with only same names of properties that we 
  need from the "geometry.location"
  */
  const { lat, lng } = geometry.location;

  return { lat, lng };
};

/*
This file will act the same as "restaurants.service.js" 
*/
