import React, { useContext, useState } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";

import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
  margin: ${(props) => props.theme.space[3]};
  border: 1px solid black;
  border-radius: 5px;
`;

export const Search = () => {
  /*
  When submiting the search, the keyword is gonig to be stored in this "keyword" property.
  We are going to trigger the "search" function at a certain point with a keyword from the 
  "searchKeyword", then set it to the keyword in "LocationContextProvider"
  */
  const { keyword, search } = useContext(LocationContext);
  /* "searchKeyword" is going to take the keyword from "LocationContext" that is by default
  "san francisco", or the text that we type in the searchbar */
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  return (
    <SearchContainer>
      <Searchbar
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
