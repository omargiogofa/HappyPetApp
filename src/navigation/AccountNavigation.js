import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Account from "../screens/Account";

const Stack = createStackNavigator();

export default function AccountNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyAccount"
        component={Account}
        options={{ title: "Mi cuenta" }}
      />
    </Stack.Navigator>
  );
}
