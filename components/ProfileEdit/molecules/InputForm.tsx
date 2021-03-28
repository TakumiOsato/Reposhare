import React from "react"
import { View } from "react-native"
import NameInputTitle from "../atoms/NameInputTitle"
import NameInput from "../atoms/NameInput"
import IntroInputTitle from "../atoms/IntroInputTitle"
import IntroInput from "../atoms/IntroInput"

const InputForm = (props) => {
  return(

    <View>
      <NameInputTitle />
      <NameInput onChangeText={props.onChangeName} />
      <IntroInputTitle />
      <IntroInput onChangeText={props.onChangeIntro} />
    </View>

  ) 
}
export default InputForm
