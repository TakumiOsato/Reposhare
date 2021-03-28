import React from "react"
import { StyleSheet, Text, View, Button } from "react-native"
import { NavigationContainer } from "@react-navigation/native"

import RootStack from "./navigation/TabNavigator/TabNavigation"


function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  )
}

export default App
