import React, { useState, useEffect } from "react"
import { View, Text, Pressable } from "react-native"
import Title from "../atoms/Title"
import InputForm from "../molecules/InputForm"
import AddBtn from "../atoms/AddBtn"
import { connect } from "react-redux"
import firebase from "firebase"
import db from "../../../firebase/firebase"

function Repoadd(props) {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")
  const [due, setDue] = useState("")
  const [detail, setDetail] = useState("")
  const email = props.email

  const doChangeTitle = (value) => {
    setTitle(value)
  }

  const doChangePrice = (value) => {
    setPrice(value)
  }

  const doChangeCategory = (value) => {
    setCategory(value)
  }

  const doChangeDue = (value) => {
    setDue(value)
  }

  const doChangeDetail = (value) => {
    setDetail(value)
  }

  const doAdd = async () => {
    await db.collection("reports").doc().set({
      createrId: email,
      title: title,
      price: price,
      category: category,
      due: due,
      detail: detail,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
  }

  return (
    <View>
      <Title />
      <InputForm
        onChangeTitle={doChangeTitle}
        onChangePrice={doChangePrice}
        onChangeCategory={doChangeCategory}
        onChangeDue={doChangeDue}
        onChangeDetail={doChangeDetail}
      />
      {/* AddBtnを押すとマイページに飛ぶようにしたい */}
      <Pressable onPress={props.onPress} />
      <AddBtn onPress={doAdd} />
    </View>
  )
}

Repoadd = connect((state) => state)(Repoadd)
export default Repoadd
