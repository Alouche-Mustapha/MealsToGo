import React from "react";
import { SafeAreaView, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { RestaurantInfoCard } from "../components/reataurant-info-card.component";

/*every styled componenet has an obejtct called "props"*/
const SafeArea = styled(SafeAreaView)`
  flex: 1; /*the flex 1 means that the SafeAreaView will take the entire height*/
  background-color: ${(props) => props.theme.colors.brand.primary};
`;
/*
margin-top: ${StatusBar.currentHeight}px : Thsi will cause an error because that ios do not support it
${StatusBar.currentHright && `margin-top: ${StatusBar.currentHeight}px`} : this means that if 
"StatusBar.currentHeight" has a value (because it is only supported on android) that means that we are 
on android phones, then you can apply a "margin-top" 
*/

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Space = styled.View`
  padding-bottom: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    paddingHorizontal: 15,
  },
})``;

export const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar placeholder="search" />
      </SearchContainer>
      <RestaurantList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
        ]}
        renderItem={() => (
          <Space>
            <RestaurantInfoCard />
          </Space>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
