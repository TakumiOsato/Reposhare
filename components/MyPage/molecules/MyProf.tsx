import React from "react"
import { View } from "react-native"
import UserImg from "../atoms/UserImg"
import UserName from "../atoms/UserName"
import FavoriteSubject from "../atoms/FavoriteSubject"
import Intro from "../atoms/Intro"

const MyProf = (props) => {
  return (
    <View>
      <UserImg src={props.src} />
      <UserName name={props.name} />
      <FavoriteSubject favoSub={props.favSub} />
      <Intro intro={props.intro} />
    </View>
  )
}

export default MyProf