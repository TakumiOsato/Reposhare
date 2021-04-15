import React from "react"
import { View } from "react-native"
import { Image } from "react-native"

const textinput = (props) => {
  return (
    <View>
      <Image
        source={props.src}
        style={{ width: 200, height: 200 }}
      />
    </View>
  )
}
export default textinput
