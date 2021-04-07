import React from "react"
import { View } from "react-native"
import Caption from "../atoms/Caption"
import NameInput from "../atoms/NameInput";
import IntroInput from "../atoms/IntroInput"

const InputForm = (props) => {
  return (
    <View>
      <Caption caption={"名前"} />
      <NameInput onChangeText={props.onChangeName} />
      <Caption caption={"自己紹介"} />
      <IntroInput onChangeText={props.onChangeIntro} />
    </View>
  )
}
export default InputForm
