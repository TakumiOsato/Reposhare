import React from "react"

import Btn from "../../../elements/Btn"

const LoginBtn = (props) => {
  return <Btn onPress={props.onPress} title={"ログイン"} />
}

export default LoginBtn