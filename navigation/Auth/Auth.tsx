import React from "react"
import { View } from "react-native"
import Btn from "../../elements/Btn"
import { connect, useDispatch } from "react-redux"
import firebase from "firebase"
import Lib from "../../redux/Lib"
import { GoogleSignin } from "@react-native-community/google-signin"
import Google from 'expo-google-app-auth';
import db from "../../firebase/firebase"

// 初回ログイン時に名前を自動的に設定するために初回ログインかどうかを判定する関数
const isFirstLogin = async (db, email) => {
  const doc = await db.collection("users").doc(email).get()
  // 存在しないときisFirstLoginはtrueを返す
  if (!doc.exists) {
    return true
  } else {
    return false
  }
}

// 初期値の登録
const doRegister = async (db, email, name) => {
  const initIntroduction = "自己紹介を入力してください！"

  // // GoogleSDKの初期化
  // GoogleSignin.configure({
  //   webClientId: ""
  // })

  // 初期の画像設定用urlの取得
  const initImageName = "initImage.png"
  // firestoreに登録
  await db
    .collection("users")
    .doc(email)
    .set(
      {
        imageName: initImageName,
        profile: { name: name, introduction: initIntroduction }
      },
      { marge: true }
    )
}
function Authentication(props) {
  const dispatch = useDispatch()
  const db = firebase.firestore()

  async function login() {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    const { idToken } = await GoogleSignin.signIn()
    const provider = firebase.auth.GoogleAuthProvider
    const credential = provider.credential(idToken)
  function login() {
    

    firebase
      .auth()
      .signInWithCredential(credential)
      //ログイン処理完了後resultで値を受け取りReduxへ
      .then(async (result) => {
        // 初回ログインかどうかの判断
        const email = Lib.encodeEmail(result.user.email)

        if (await isFirstLogin(db, email)) {
          // 初回ログインの場合データベースに初期値を入力する
          doRegister(db, email, result.user.displayName)
        } else {
          // 2回目以降のログインの場合データベースの中身をもってくる
          await db
            .collection("users")
            .doc(email)
            .get()
            .then((doc) => {
              dispatch({
                type: "UPDATE_USER",
                value: {
                  login: true,
                  userName: doc.data().userName,
                  email: email,
                  userImage: doc.data().userImage
                }
              })
            })
        }
      })
    //ログイン時の処理をpropsで受け取れるようにする
    //とりま使ってない
    // this.props.onLogined();
  }

  //ログアウト機能
  const logout = () => {
    console.log("logout")
    firebase.auth().signOut()
    dispatch({
      type: "UPDATE_USER",
      value: {
        login: false,
        userName: "(click here!)",
        email: "",
        data: [],
        imageName: ""
      }
    })
    // this.props.onLogouted();
  }

  //ログイン、ログアウト処理をクリック時に分岐する関数
  const loginCheck = () => {
    if (props.title === "ログイン") {
      login()
    } else {
      logout()
      // router.push("/")
    }
  }

  return (
    <View>
      <Btn onPress={loginCheck} title={props.title} />
    </View>
  )
}

Authentication = connect((state) => state)(Authentication)
export default Authentication
