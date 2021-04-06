import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeScreen from "../../components/HomeScreen/HomeScreen"
import MyPage from "../../components/MyPage/MyPage"
import SignUpScreen from "../../components/Login/SignUpScreen"

const Tab = createBottomTabNavigator()

export default function HomeTabs() {
  return (
    <Tab.Navigator initialRouteName="ホーム">
      <Tab.Screen name="ホーム" component={HomeScreen} />
      <Tab.Screen name="マイページ" component={MyPage} />
      <Tab.Screen name="新規登録/ログイン" component={SignUpScreen} />
    </Tab.Navigator>
  )
}
