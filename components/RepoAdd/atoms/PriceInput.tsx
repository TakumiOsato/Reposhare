import React from "react"
import Input from "../../../elements/Input"

const PriceInput = (props) => {
  return (
  <Input 
    onChangeText={props.onChangeText}
    numberOfLines={1}
    placeholder={"例)4,000"}
    />
  )
}
export default PriceInput
