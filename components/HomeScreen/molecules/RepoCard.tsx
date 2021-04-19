import React from "react"
import { View, Pressable, Button } from "react-native"
import { Card, Text } from "react-native-elements"
// StackNavigetorコンポーネント内のコンポーネントをNavigateする場合は{useNavigation}を用いてnavigation propsを渡す
import { useNavigation } from "@react-navigation/native"

// typescriptによる型の定義
// interface RepoCardProps {
//   onPress: string
//   title: string
//   src: string
//   price: number
// }

const RepoCard = (props) => {
  const navigation = useNavigation()
  return (
    <View>
      <Pressable
        // RepoDetailへのページ遷移とrouteを用いたデータの受け渡し
        onPress={() =>
          navigation.navigate("RepoDetail", {
            title: props.title,
            url: props.url,
            due: props.due,
            price: props.price,
            detail: props.detail,
            createrId: props.createrId
          })
        }
      >
        <Card>
          <Card.Title>{props.title}</Card.Title>
          <Card.Divider />
          <Card.Image source={{ uri: props.url }} />
          <Text>¥{props.price}</Text>
        </Card>
      </Pressable>
    </View>
  )
}

export default RepoCard
