import React from "react";

import Scan from "./screens/Scan";
import Lobby from "./screens/Lobby";
import Runes from "./screens/Runes";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Scan'
          component={Scan}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='Runes'
          component={Runes}
          options={{
            title: "Runes",
            headerShown: false,
          }}
        />
        <Stack.Screen name='Lobby' component={Lobby} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
