import React from "react"
import Input from "../../../elements/Input"

const DetailInput = (props) => {
  return (
  <Input 
    onChangeText={props.onChangeText}
    numberOfLines={8}
    placeholder={"詳細を入力してください"}
    />
  )
}
export default DetailInput