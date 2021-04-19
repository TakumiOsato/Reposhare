import React from "react"
import { StyleSheet, Text, View, Button } from "react-native"
import Profileshow from "./organisms/Profileshow.tsx"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
})

const ProfileShow = ({ route }) => {
  const { createrId } = route.params

  return (
    <View style={styles.container}>
      <Profileshow createrId={createrId} />
    </View>
  )
}
export default ProfileShow
