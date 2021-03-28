import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import HomeStacks from "./navigation/StackNavigator/HomeStacks"


function App() {
  return (
    <NavigationContainer>
      <HomeStacks />
    </NavigationContainer>
  )
}

export default App
