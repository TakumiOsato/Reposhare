import React from "react"
import { StyleSheet, Text, View, Button } from "react-native"
import Mypage from "./organisms/Mypage"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
})

const MyPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Mypage onPress={() => navigation.navigate("ProfileEdit")} naviRepoAdd={() => navigation.navigate("RepoAdd")}/>
    </View>
  )
}
export default MyPage
