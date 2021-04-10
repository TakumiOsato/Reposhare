import React from "react"
import Txt from "../../../elements/Txt"

const Price = (props) => {
  return <Txt text={`¥${props.price}`} />
}

export default Price