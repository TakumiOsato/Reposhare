import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import MyPage from "../../components/MyPage/MyPage"
import ProfileEdit from "../../components/ProfileEdit/ProfileEdit"

const Stack = createStackNavigator()

const MyPageStacks = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MyPage" component={MyPage} />
      <Stack.Screen name="ProfileEdit" component={ProfileEdit} />
    </Stack.Navigator>
  )
}

export default MyPageStacks
