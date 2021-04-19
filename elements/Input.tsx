import React from "react"
import { View, TextInput } from "react-native"

const textinput = (props) => {
  return (
    <View>
      <TextInput
        onChangeText={props.onChangeText}
        multiline
        blurOnSubmit={true}
        value={props.value}
        // clearTextOnFocus={true}
        numberOfLines={props.numberOfLines}
        placeholder={props.placeholder}
      />
    </View>
  )
}
export default textinput
