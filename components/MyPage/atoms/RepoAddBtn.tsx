import React from "react"
import Btn from "../../../elements/Btn"

const RepoAddBtn =(props) => {

  return(
    <Btn title={"レポートを追加する"} onPress={props.onPress} />
  )
}

export default RepoAddBtn