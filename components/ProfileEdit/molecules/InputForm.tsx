import React from "react"
import { View } from "react-native"
import Caption from "../atoms/Caption"
import NameInput from "../atoms/NameInput";
import IntroInput from "../atoms/IntroInput"
import ImgRegBtn from "../atoms/ImgRegBtn"
import UserImg from "../atoms/UserImg"

const InputForm = (props) => {
  return (
    <View>
      <Caption caption={"プロフィール画像"}　/>
      <UserImg src={props.src} />
      <ImgRegBtn onPress={props.onChangeImg} />
      <Caption caption={"名前"} />
      <NameInput onChangeText={props.onChangeName} value={props.nameInputValue}/>
      <Caption caption={"自己紹介"} />
      <IntroInput onChangeText={props.onChangeIntro} value={props.introInputValue} />
    </View>
  )
}
export default InputForm
