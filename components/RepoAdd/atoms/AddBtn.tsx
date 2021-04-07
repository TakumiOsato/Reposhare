import React from "react"
import Btn from "../../../elements/Btn"

const AddBtn = (props) => {
  return <Btn onPress={props.onPress} title={"追加"} />
}

export default AddBtn
