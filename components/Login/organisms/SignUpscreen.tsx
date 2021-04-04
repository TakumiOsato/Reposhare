import React, { useState } from "react"
import { View } from "react-native"
import Title from "../atoms/Title"
import InputForm from "../molecules/InputForm"
import RegBtn from "../atoms/RegBtn"
import firebase from "firebase"
import db from "../../../firebase/firebase"
import LoginForm from "../molecules/LoginForm"

function SignUpscreen(props) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const doChangeEmail = (value) => {
    setEmail(value)
  }

  const doChangePassword = (value) => {
    setPassword(value)
  }

  // 初回登録
  const Register = async () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user)
        {
          props.navigation
        }
      })
      .catch((error) => {
        console.log(error)
      })

    await db.collection("users").doc().set({
      email: email
    })
  }

  return (
    <View>
      <Title title={"新規登録"} />
      <InputForm
        onChangeEmail={doChangeEmail}
        onChangePassword={doChangePassword}
      />
      <RegBtn OnPress={Register} />
      <LoginForm onPress={props.onPress} />
    </View>
  )
}

export default SignUpscreen
