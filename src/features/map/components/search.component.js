import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";

import { LocationContext } from "../../../services/location/location.context";
import { Dimensions, SafeAreaView, StatusBar } from "react-native";

/*The search container inside the map screen*/
const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  position: absolute;
  z-index: 999;
  top: ${StatusBar.currentHeight
    ? StatusBar.currentHeight
    : (Dimensions.get("screen").height * 4) / 100}px;
  width: 100%;
`;

/*Same search bar as in the restaurants container*/
export const Search = () => {
  /*Use the context to set the keyword to the search bar*/
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  /*Every time the keyword changed (inside or outside the map screen) we have to set the search keyword to the new value 
  to have synchronization between the restaurants screen and the map screen*/
  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);
  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        icon="map"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};
