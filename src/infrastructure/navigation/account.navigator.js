import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { AccountScreen } from "../../features/account/screens/account.screen";
import { LoginScreen } from "../../features/account/screens/login.screen";
import { RegisterScreen } from "../../features/account/screens/register.screen";

/*Stack that will hold screens*/
const Stack = createStackNavigator();

export const AccountNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      ...TransitionPresets.BottomSheetAndroid,
      headerShown: false,
    }}
  >
    <Stack.Screen name="Main" component={AccountScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
);
