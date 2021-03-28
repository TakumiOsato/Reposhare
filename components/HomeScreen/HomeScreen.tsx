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

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>レポート一覧</Text>
      <Button
        title="詳細へ"
        onPress={() => navigation.navigate("RepoDetail")}
      />
    </View>
  )
}
export default HomeScreen

