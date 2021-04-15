import React, { useEffect, useState } from "react"
import { View } from "react-native"
import Title from "../atoms/Title"
import RepoInfo from "../molecules/RepoInfo"
import ReqBtn from "../atoms/ReqBtn"

function Repodetail(props) {
  return (
    <View>
      <Title title={props.title} />
      <RepoInfo
        src={props.src}
        due={props.due}
        price={props.price}
        detail={props.detail}
      />
      <ReqBtn onPress={props.onPress} />
    </View>
  )
}

export default Repodetail
