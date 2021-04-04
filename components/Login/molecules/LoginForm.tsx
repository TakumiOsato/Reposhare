import React from "react"
import { View } from "react-native"
import LoginTxt from "../atoms/LoginTxt"
import LoginBtn from "../atoms/LoginBtn"

const LoginForm = (props) => {
  return (
    <View>
      <LoginTxt />
      <LoginBtn onPress={props.onPress} />
    </View>
  )
}

export default LoginForm
