import React from "react"
import Btn from "../../../elements/Btn"

const ImgRegBtn = (props) => {
  return(
    <Btn title={"画像を追加する"}　onPress={props.onPress} />
  )
}

export default ImgRegBtn