import React from "react"
import { View, Button } from "react-native"

const Btn = (props) => {
  return (
    <View>
      <Button onPress={props.onPress} title={props.title} />
    </View>
  )
}

export default Btn
