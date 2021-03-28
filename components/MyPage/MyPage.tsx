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

const MyPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>MyPage</Text>
      <Button
        title="編集する"
        onPress={() => navigation.navigate("ProfileEdit")}
      />
    </View>
  )
}
export default MyPage
