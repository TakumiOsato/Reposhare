import React from "react"
import Input from "../../../elements/Input"

const CategoryInput = (props) => {
  return (
  <Input 
    onChangeText={props.onChangeText}
    numberOfLines={1}
    placeholder={"例)機械工学"}
    />
  )
}
export default CategoryInput
