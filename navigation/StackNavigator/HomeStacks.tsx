import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from "../../components/HomeScreen/HomeScreen"
import RepoDetail from "../../components/RepoDetail/RepoDetail"
import ProfileShow from "../../components/ProfileShow/ProfileShow"
import Chats from "../../components/OnTrade/Chats"

const Stack = createStackNavigator()

const HomeStacks = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="RepoDetail" component={RepoDetail} />
      <Stack.Screen name="ProfileShow" component={ProfileShow} />
      <Stack.Screen name="Chats" component={Chats}　 />
    </Stack.Navigator>
  )
}

export default HomeStacks
