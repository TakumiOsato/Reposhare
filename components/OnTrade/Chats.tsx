import React from "react"
import { StyleSheet, Text, View, Button } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
})

const Chats = () => {
  return (
    <View style={styles.container}>
      <Text>Chats</Text>
    </View>
  )
}
export default Chats
