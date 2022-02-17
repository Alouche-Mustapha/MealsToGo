import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";

import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
  margin: ${(props) => props.theme.space[3]};
  border: 1px solid black;
  border-radius: 5px;
`;

export const Search = ({ isFavouritesToggled, onFavouritesToggle }) => {
  /*
  When submiting the search, the keyword is gonig to be stored in this "keyword" property.
  We are going to trigger the "search" function at a certain point with a keyword from the 
  "searchKeyword", then set it to the keyword in "LocationContextProvider"
  */
  const { keyword, search } = useContext(LocationContext);
  /* "searchKeyword" is going to take the keyword from "LocationContext" that is by default
  "san francisco", or the text that we type in the searchbar */
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  /*When the search keyword changed (from inside the restaurant screen or from the map screen) we need to set the search
  keyword to the remaining keyword*/
  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        /*Check if the the favourites button is toggled or not and set the specific icon to the search bar*/
        icon={isFavouritesToggled ? "heart" : "heart-outline"}
        onIconPress={onFavouritesToggle}
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
        style={{ backgroundColor: "#C6DAF7" }}
      />
    </SearchContainer>
  );
};
