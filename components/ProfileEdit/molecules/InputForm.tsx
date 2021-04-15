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
      <UserImg src={props.src} />
      <ImgRegBtn onPress={props.onChangeImg} />
      <Caption caption={"名前"} />
      <NameInput onChangeText={props.onChangeName} />
      <Caption caption={"プロフィール画像"}　/>
      <Caption caption={"自己紹介"} />
      <IntroInput onChangeText={props.onChangeIntro} />
    </View>
  )
}
export default InputForm
