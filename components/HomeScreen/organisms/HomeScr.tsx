import React, { useEffect, useState } from "react"
import { View, Text } from "react-native"
import Title from "../atoms/Title"
import RepoCard from "../molecules/RepoCard"
import db from "../../../firebase/firebase"

const HomeScr = (props) => {
  const [items, setItems] = useState("no item")
  const ReportItems = []

  const getFireData = async () => {
    await db
      .collection("reports")
      .orderBy("createdAt", "desc")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          ReportItems.push(
            <RepoCard
              onPress={props.onPress}
              title={doc.data().title}
              src={doc.data().repoImgurl}
              price={doc.data().price}
              key={doc.id.toString()}
            />
          )
        })
      })
    setItems(ReportItems)
  }

  useEffect(() => {
    getFireData()
  }, [])
  return (
    <View>
      <Title />
      <Text>{items}</Text>
    </View>
  )
}

export default HomeScr
