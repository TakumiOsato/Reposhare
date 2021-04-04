import React, { useState } from "react"
import { View } from "react-native"
import Title from "../atoms/Title"
import InputForm from "../molecules/InputForm"
import LoginBtn from "../atoms/LoginBtn"
import firebase from "firebase"


function Loginscreen(props) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const doChangeEmail = (value) => {
    setEmail(value)
  }

  const doChangePassword = (value) => {
    setPassword(value)
  }

  // ログイン
  const doLogin = async () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user)
        {
          props.navigation
        }
      })
      .catch((error) => {
        console.log(error)
      })

    
  }

  return (
    <View>
      <Title title={"ログイン"} />
      <InputForm
        onChangeEmail={doChangeEmail}
        onChangePassword={doChangePassword}
      />
      <LoginBtn OnPress={doLogin} />
    </View>
  )
}

export default Loginscreen
