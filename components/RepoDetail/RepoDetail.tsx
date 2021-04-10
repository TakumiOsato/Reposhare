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

const RepoDetail = ({ route, navigation }) => {
  // RepoCardからrouteでデータを取得
  const { title } = route.params
  const { src } = route.params
  const { due } = route.params
  const { price } = route.params
  const { detail } = route.params
  return (
    <View style={styles.container}>
      <Repodetail
        /* JOSNシリアル化によって取得したデータの永続化 */
        title={JSON.stringify(title)}
        src={JSON.stringify(src)}
        due={JSON.stringify(due)}
        price={JSON.stringify(price)}
        detail={JSON.stringify(detail)}
        onPress={() => navigation.navigate("Chats")}
      />
      <Button
        title="他人のプロフィール"
        onPress={() => navigation.navigate("ProfileShow")}
      />
    </View>
  )
}

export default RepoDetail
