import React, { useState } from "react"
import { View, Text, Pressable } from "react-native"
import Title from "../atoms/Title"
import InputForm from "../molecules/InputForm"
import EditBtn from "../atoms/EditBtn"
import { connect } from "react-redux"
import { encodeEmail } from "../../../redux/Lib"
import db from "../../../firebase/firebase"

function ProEdit(props) {
  const [Name, setName] = useState("")
  const [Intro, setIntro] = useState("")
  const Email = encodeEmail(props.email)
  const doChangeName = (value) => {
    setName(value)
  }

  const doChangeIntro = (value) => {
    setIntro(value)
  }

  const doEdit = async () => {
    await db.collection("users").doc(Email).set({
      name: Name,
      intro: Intro
    })
  }

  return (
    <View>
      <Title />
      <InputForm onChangeName={doChangeName} onChangeIntro={doChangeIntro} />
        {/* EditBtnを押すとマイページに飛ぶようにしたい */}
      <Pressable onPress={props.onPress}/>
      <EditBtn onPress={doEdit} />
    </View>
  )
}

ProEdit = connect((state) => state)(ProEdit)
export default ProEdit
