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

const ProfileShow = () => {
  return (
    <View style={styles.container}>
      <Text>ProfileShow</Text>
    </View>
  )
}
export default ProfileShow