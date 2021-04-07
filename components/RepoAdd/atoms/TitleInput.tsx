import React from "react"
import Input from "../../../elements/Input"

const TitleInput = (props) => {
  return (
  <Input 
    onChangeText={props.onChangeText}
    numberOfLines={1}
    placeholder={"例)機構学のレポート"}
    />
  )
}
export default TitleInput