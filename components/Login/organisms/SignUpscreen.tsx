import React, { useState } from "react"
import { View, Text } from "react-native"
import Title from "../atoms/Title"
import { connect,useDispatch } from "react-redux"
import InputForm from "../molecules/InputForm"
import RegBtn from "../atoms/RegBtn"
import firebase from "firebase"
import db from "../../../firebase/firebase"
import LoginForm from "../molecules/LoginForm"
import { encodeEmail } from "../../../redux/Lib"

function SignUpscreen(props) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const doChangeEmail = (value) => {
    setEmail(value)
  }

  const doChangePassword = (value) => {
    setPassword(value)
  }

  const dispatch = useDispatch()

  const Register = async () => {
    // firebaseAuthで初回登録・ログイン処理
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
    const Email = encodeEmail(email)

    // firestoreにデータを追加
    await db.collection("users").doc(Email).set({
      email: email
    })

    // Reduxにデータを追加
    dispatch({
      type: "USER_EMAIL",
      value: {
        email: email
      }
    })
  }

  return (
    <View>
      <Text>{props.email}</Text>
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

SignUpscreen = connect((state) => state)(SignUpscreen)
export default SignUpscreen
