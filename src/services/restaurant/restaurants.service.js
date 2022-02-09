import { mockImages, mocks } from "./mock";
import camelize from "camelize";

/*
Create a new promise. Promise will take a function that takes two functions as args.
The "location" arg is given (key) so we can get the value (city name) from index.js (mocks object), if the location is not 
found (not a valide key) we will call the reject funtion, else we will call the resolve function that return the result
*/
export const restaurantsRequest = (location = "51.219448,4.402464") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("Not found");
    }
    resolve(mock);
  });
};

/*
This function is used the transform the data to what we need in order to use it.
When we call this function in "then()" we give it the hole data from the json file (object),
so this function will take as an argument just the array of restaurants (results) and iterate
on every item (restaurant as object) and add some propreties  
*/
export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
    return {
      ...restaurant,
      isOpen: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: results.business_status === "CLOSED_TEMPORARILY",
    };
  });
  return camelize(mappedResults);
};

/*
We call the previous function but we should wait for the result (because it's a promise), then (after calling resolve)
we can call the "restaurantTransform" function that parse the data into what we want, and after that we can execute the 
"second then()". But in the case of an error (calling reject from the previous function) we jump to "catch()" function 

restaurantsRequest()
.then(restaurantsTransform)
.then((transformResponse) => {
  console.log(transformResponse);
})
.catch((error) => {
  console.log(error);
});
*/

/*
This file is used to communicate with the API (we are sumilating the api by a local json files) by retrieving data 
*/
