import React, { useState, useEffect } from "react"
import { View, Text } from "react-native"
import auth from "@react-native-firebase/auth"

function Auth() {
  // Firebaseの接続の初期化
  const [initializing, setInitializing] = useState(true)
  const [user, setUser] = useState()

  // ログイン状態の管理
  function onAuthStateChanged(user) {
    setUser(user)
    if (initializing) setInitializing(false)
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
    return subscriber
  }, [])

  if (initializing) return null

  if (!user) {
    return (
      <View>
        <Text>Login</Text>
      </View>
    )
  }

  return (
    <View>
      <Text>Welcome {user.email}</Text>
    </View>
  )
}

export default Auth
