import React from "react"
import { View, Text, Button, StyleSheet } from "react-native"
import HomeSrc from "./organisms/HomeScr"

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
      <HomeSrc onPress={() => navigation.navigate("RepoDetail")} />
    </View>
  )
}
export default HomeScreen
