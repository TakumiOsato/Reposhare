import React from "react"
import { StyleSheet, View } from "react-native"
import SignUpscreen from "./organisms/SignUpscreen"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
})

const SignUpScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SignUpscreen
        navigation={() => navigation.navigate("Hometabs")}
        onPress={() => navigation.navigate("LoginScreen")}
      />
    </View>
  )
}
export default SignUpScreen
