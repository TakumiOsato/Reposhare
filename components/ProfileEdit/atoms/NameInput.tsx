import React from "react"
import Input from "../../../elements/Input"

const NameInput = (props) => {
  return (
  <Input 
    onChangeText={props.onChangeText}
    numberOfLines={1}
    value={props.value}
    placeholder={"名前を入力してください"}
    />
  )
}
export default NameInput