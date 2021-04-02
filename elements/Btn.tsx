import React from "react"
import { View, Button } from "react-native"

const button = (props) => {
  return (
    <View>
      <Button onPress={props.onPress} title={props.title} />
    </View>
  )
}

export default button
