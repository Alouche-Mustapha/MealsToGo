import React, { useContext } from "react";
import { StatusBar, Text } from "react-native";
import { Avatar, List } from "react-native-paper";
import styled from "styled-components/native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  return (
    <SafeArea style={{ paddingTop: StatusBar.currentHeight * 2 }}>
      <Avatar.Icon
        size={180}
        icon="human"
        color="#2182BD"
        style={{ backgroundColor: "#C6DAF7", alignSelf: "center" }}
      />
      <Text style={{ textAlign: "center", fontWeight: "bold", marginTop: 15 }}>
        {user.email}
      </Text>
      <List.Section>
        <SettingsItem
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <SettingsItem
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
};

{
  /* <Button title="Logout" onPress={() => onLogout()}></Button> */
}
