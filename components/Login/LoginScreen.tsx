import React from "react"
import { StyleSheet, View } from "react-native"
import Loginscreen from "./organisms/Loginscreen"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
})

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Loginscreen navigation={() => navigation.navigate("Hometabs")} />
    </View>
  )
}
export default LoginScreen
