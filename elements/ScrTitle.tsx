import React from "react"
import { View, Text, StyleSheet } from "react-native"

const styles = StyleSheet.create({
  title: {
    fontSize: 30
  },
  subTitle: {
    fontSize: 20
  }
})

const ScrTitle = (props) => {
  return (
    <View>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.subTitle}>{props.subtitle}</Text>
    </View>
  )
}

export default ScrTitle
