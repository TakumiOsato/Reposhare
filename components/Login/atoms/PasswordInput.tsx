import React from "react"
import TxtInput from "../../../elements/TxtInput"

const PasswordInput = (props) => {
  return <TxtInput onChangeText={props.onChangeText} placeholder={"Password"} />
}
export default PasswordInput
