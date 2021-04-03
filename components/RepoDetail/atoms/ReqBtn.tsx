import React from "react"
import Btn from "../../../elements/Btn"

const ReqBtn = (props) => {
  return <Btn  onPress={props.onPress} title={"リクエストする"}/>
}

export default ReqBtn