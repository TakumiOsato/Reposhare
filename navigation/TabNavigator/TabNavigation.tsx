import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeStacks from "../StackNavigator/HomeStacks"
import MyPageStacks from "../StackNavigator/MyPageStacks"

const Tab = createBottomTabNavigator()

export default function RootStack() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStacks} />
      <Tab.Screen
        name="MyPage"
        component={MyPageStacks}
        options={{ tabBarVisible: false}}
      />
    </Tab.Navigator>
  )
}
