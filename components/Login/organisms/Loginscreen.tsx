import React, { useState } from "react"
import { View, Text } from "react-native"
import Title from "../atoms/Title"
import InputForm from "../molecules/InputForm"
import LoginBtn from "../atoms/LoginBtn"
import firebase from "firebase"
import { connect, useDispatch } from "react-redux"
import { encodeEmail } from "../../../redux/Lib"

function Loginscreen(props) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const doChangeEmail = (value) => {
    setEmail(value)
  }

  const doChangePassword = (value) => {
    setPassword(value)
  }

  const dispatch = useDispatch()

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
        dispatch({
          type: "USER_EMAIL",
          value: {
            email: email
          }
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <View>
      <Text>{props.email}</Text>
      <Title title={"ログイン"} />
      <InputForm
        onChangeEmail={doChangeEmail}
        onChangePassword={doChangePassword}
      />
      <LoginBtn onPress={doLogin} />
    </View>
  )
}

Loginscreen = connect((state) => state)(Loginscreen)
export default Loginscreen
