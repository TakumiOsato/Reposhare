import React from "react"
import { StyleSheet, View } from "react-native"
import ProfEdit from "./organisms/ProfEdit"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
})

const ProfileEdit = () => {
  return (
    <View style={styles.container}>
      <ProfEdit />
    </View>
  )
}
export default ProfileEdit
