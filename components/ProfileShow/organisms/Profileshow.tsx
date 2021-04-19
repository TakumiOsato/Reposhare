import React, { useEffect, useState } from "react"
import { View } from "react-native"
import Title from "../atoms/Title"
import MyProf from "../molecules/MyProf"
import db from "../../../firebase/firebase"
import { encodeEmail } from "../../../redux/Lib"

let userImgUrl = "no data"
let name = "no data"
let intro = "no data"

function Profileshow(props) {
  const [update, setUpdate] = useState(false)
  const Email = encodeEmail(props.createrId)
  const getFireData = async () => {
    // Emailでfirebaseを参照
    await db
      .collection("users")
      .doc(Email)
      .get()
      .then(async (doc) => {
        const profileData = doc.data()
        name = profileData.name
        intro = profileData.intro
        // favoriteSubject = profileData.profile.favoriteSubject
        userImgUrl = profileData.userImgUrl
      })
    setUpdate(update ? false : true)
  }
  useEffect(() => {
    getFireData()
  }, [])

  return (
    <View>
      <Title />
      <MyProf
        src={{ uri: userImgUrl }}
        name={name}
        // favoSub={favoriteSubject}
        intro={intro}
      />
    </View>
  )
}

export default Profileshow
