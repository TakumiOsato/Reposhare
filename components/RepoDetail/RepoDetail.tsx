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

const RepoDetail = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>RepoDetail</Text>
      <Button
        title="他人のプロフィール"
        onPress={() => navigation.navigate("ProfileShow")}
      />
      <Button
        title="チャット画面"
        onPress={() => navigation.navigate("Chats")}
      />
    </View>
  )
}
export default RepoDetail
