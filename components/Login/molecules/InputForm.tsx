import React from "react"
import { View } from "react-native"
import EmailInput from "../atoms/EmailInput"
import PasswordInput from "../atoms/PasswordInput"

const InputForm = (props) => {
  return (
    <View>
      <EmailInput onChangeText={props.onChangeEmail} />
      <PasswordInput onChangeText={props.onChangePassword} />
    </View>
  )
}
export default InputForm
