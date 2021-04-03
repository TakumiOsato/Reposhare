import React from "react"
import { StyleSheet, Text, View, Button } from "react-native"
import RepoImg from "./atoms/RepoImg"
import Repodetail from "./organisms/Repodetail"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
})

const RepoDetail = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="他人のプロフィール"
        onPress={() => navigation.navigate("ProfileShow")}
      />
      <Repodetail onPress={() => navigation.navigate("Chats")} />
    </View>
  )
}

export default RepoDetail
