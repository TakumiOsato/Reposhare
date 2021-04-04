import React from "react"
import TxtInput from "../../../elements/TxtInput"

const EmailInput = (props) => {
  return (
    <TxtInput
      onChangeText={props.onChangeText}
      placeholder={"Email"}
    />
  )
}
export default EmailInput
