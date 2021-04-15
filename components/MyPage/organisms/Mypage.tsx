import React, { useEffect, useState } from "react"
import { View } from "react-native"
import Title from "../atoms/Title"
import MyProf from "../molecules/MyProf"
import EditBtn from "../atoms/EditBtn"
import db from "../../../firebase/firebase"
import { connect } from "react-redux"
import { encodeEmail } from "../../../redux/Lib"
import RepoAddBtn from "../atoms/RepoAddBtn"

let userImgUrl = "no data"
let name = "no data"
let intro = "no data"

function Mypage(props) {
  const [update, setUpdate] = useState(false)
  const Email = encodeEmail(props.email)
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
      <EditBtn onPress={props.onPress} />
      <RepoAddBtn onPress={props.naviRepoAdd} />
    </View>
  )
}

Mypage = connect((state) => state)(Mypage)
export default Mypage
