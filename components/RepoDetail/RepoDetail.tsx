import React from "react"
import { StyleSheet, Text, View, Button } from "react-native"
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
  // components/HomeScreen/RepoCardからrouteでデータを取得
  const { title } = route.params
  const { url } = route.params
  const { due } = route.params
  const { price } = route.params
  const { detail } = route.params
  const { createrId } = route.params
  return (
    <View style={styles.container}>
      <Repodetail
        title={title}
        src={{ uri: url }}
        due={due}
        price={price}
        detail={detail}
        onPress={() => navigation.navigate("Chats")}
      />
      <Button
        title="作成者のプロフィール"
        onPress={() =>
          navigation.navigate("ProfileShow", {
            createrId: createrId
          })
        }
      />
    </View>
  )
}

export default RepoDetail
