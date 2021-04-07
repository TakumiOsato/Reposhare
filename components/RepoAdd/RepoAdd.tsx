import React from "react"
import { View, StyleSheet } from "react-native"
import Repoadd from "./organisms/Repoadd"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
})

const RepoAdd = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Repoadd onPress={() => navigation.navigate("Mypage")} />
    </View>
  )
}

export default RepoAdd
