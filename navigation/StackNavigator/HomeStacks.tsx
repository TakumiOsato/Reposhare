import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import RepoDetail from "../../components/RepoDetail/RepoDetail"
import ProfileShow from "../../components/ProfileShow/ProfileShow"
import Chats from "../../components/OnTrade/Chats"
import HomeTabs from "../../navigation/TabNavigator/TabNavigation"
import MyPage from "../../components/MyPage/MyPage"
import ProfileEdit from "../../components/ProfileEdit/ProfileEdit"
import LoginScreen from "../../components/Login/LoginScreen"
import SignUpScreen from "../../components/Login/SignUpScreen"
import RepoAdd from "../../components/RepoAdd/RepoAdd"

const Stack = createStackNavigator()

const HomeStacks = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeTabs"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="HomeTabs" component={HomeTabs} />
      <Stack.Screen name="Mypage" component={MyPage} />
      <Stack.Screen name="RepoDetail" component={RepoDetail} />
      <Stack.Screen name="ProfileEdit" component={ProfileEdit} />
      <Stack.Screen name="ProfileShow" component={ProfileShow} />
      <Stack.Screen name="Chats" component={Chats} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="RepoAdd" component={RepoAdd} />
    </Stack.Navigator>
  )
}

export default HomeStacks
