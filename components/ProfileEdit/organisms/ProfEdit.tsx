import React, {useState} from "react"
import { View } from "react-native"
import Title from "../atoms/Title"
import InputForm from "../molecules/InputForm"
import EditBtn from "../atoms/EditBtn"

import firebase from "firebase"
import db from "../../../firebase/firebase"
import { Value } from "react-native-reanimated"



function ProEdit(props) {
  const [Name, setName] = useState("")
  const [Intro, setIntro] = useState("")

  const doChangeName = (value) => {
    setName(value)
  }

  const doChangeIntro = (value) => {
    setIntro(value)
  }

  const doEdit = async () => {
    await db
    .collection("users")
    .add({
      Name: Name,
      Intro: Intro
    })
  }



  return (
    <View>
      <Title />
      <InputForm onChangeName={doChangeName} onChangeIntro={doChangeIntro} />
      <EditBtn OnPress={doEdit} />
    </View>
  )
}

export default ProEdit
