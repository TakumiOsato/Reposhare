import React from "react"
import Input from "../../../elements/Input"

const IntroInput = (props) => {
  return (
  <Input 
    onChangeText={props.onChangeText}
    numberOfLines={8}
    value={props.value}
    placeholder={"自己紹介を入力してください"}
    />
  )
}
export default IntroInput
