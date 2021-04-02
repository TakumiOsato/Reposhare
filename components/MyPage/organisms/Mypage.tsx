import React,{ useEffect, useState } from "react" 
import {View,StyleSheet} from "react-native"
import Title from "../atoms/Title"
import MyProf from "../molecules/MyProf"
import EditBtn from "../atoms/EditBtn"
import { connect } from "react-redux"
import db from "../../../firebase/firebase"
// import { useRouter } from "next/router"

// let userImage = "no data"
// let userName  = "no data"
// let userIntro = "no data"

function Mypage(props){
  //  const [update, setUpdate] = useState(false)
  // const router = useRouter()

  // const getFireData = async () => {
  //   // emailにReduxからユーザーのemailを取得
  //   const email = props.email
  //   // emailでfirebaseを参照
  //   await db
  //     .collection("users")
  //     .doc(email)
  //     .get()
  //     .then(async (doc) => {
  //       // 取得したデータを定数に入れてから、ステートに入れる
  //       const profileData = doc.data()
  //       userImage = await getProfileImageUrl(profileData.imageName)
  //       userName = profileData.profile.userName
  //       favoriteSubject=profileData.profile.favoriteSubject
  //       userIntro = profileData.profile.introduction
  //     })
  //   setUpdate(update ? false : true)
  // }
  // useEffect(() => {
  //   if (!props.login) {
  //     return router.push("/")
  //   }
  //   getFireData()
  // }, [])
  
  return( 
    <View>
      <Title />
      {/* <MyProf src={userImage} name={userName} favoSub={favoriteSubject} intro={userIntro} /> */}
      <EditBtn onPress={props.onPress} />

    </View>
  )
}

export default Mypage