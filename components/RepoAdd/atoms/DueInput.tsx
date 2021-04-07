import React from "react"
import Input from "../../../elements/Input"

const DueInput = (props) => {
  return (
  <Input 
    onChangeText={props.onChangeText}
    numberOfLines={1}
    placeholder={"例)2020/04/30"}
    />
  )
}
export default DueInput
