import React from "react"
import { Text, View } from "react-native"
import UserImg from "../atoms/UserImg"
import UserName from "../atoms/UserName"
import FavoriteSubject from "../atoms/FavoriteSubject"
import Intro from "../atoms/Intro"
import SubTitle from "../atoms/SubTitle"


const MyProf = (props) => {
  return (
    <View>
      <UserImg src={props.src} />
      <SubTitle subTitle={"名前"} />
      <UserName name={props.name} />
      <SubTitle subTitle={"自己紹介"} />
      <FavoriteSubject favoSub={props.favSub} />
      <Intro intro={props.intro} />
    </View>
  )
}

export default MyProf
