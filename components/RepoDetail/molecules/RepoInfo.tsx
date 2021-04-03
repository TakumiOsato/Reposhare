import React from "react"
import { View } from "react-native"
import RepoImg from "../atoms/RepoImg"
import Detail from "../atoms/Detail"
import Due from "../atoms/Due"
import Price from "../atoms/Price"

const UserImg = (props) => {
  return (
    <View>
      <RepoImg src={props.src} />
      <Due due={props.due} />
      <Price price={props.price} />
      <Detail detail={props.detail} />
      
    </View>
  )
}

export default UserImg
