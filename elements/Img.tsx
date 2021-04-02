import React from "react"
import { View } from "react-native"
import { Avatar } from "react-native-elements"

const textinput = (props) => {
  return (
    <View>
      <Avatar
        size={props.size}
        rounded
        title={props.title}
        activeOpacity={0.7}
        source={props.src}
      />
    </View>
  )
}
export default textinput
