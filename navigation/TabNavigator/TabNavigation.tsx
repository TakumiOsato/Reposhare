import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeScreen from "../../components/HomeScreen/HomeScreen"
import MyPage from "../../components/MyPage/MyPage"

const Tab = createBottomTabNavigator()

export default function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="MyPage" component={MyPage} />
    </Tab.Navigator>
  )
}
