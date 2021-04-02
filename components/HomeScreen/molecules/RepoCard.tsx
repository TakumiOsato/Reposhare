import React from "react"
import { View, Pressable } from "react-native"
import { Card, Text } from "react-native-elements"
// interface RepoCardProps {
//   onPress: string
//   title: string
//   src: string
//   price: number
// }

const RepoCard = (props) => {
  return (
    <View>
      <Pressable onPress={props.onPress}>
        <Card>
          <Card.Title>{props.title}</Card.Title>
          <Card.Divider />
          <Card.Image source={props.src} />
          <Text>¥{props.price}</Text>
        </Card>
      </Pressable>
    </View>
  )
}

export default RepoCard
