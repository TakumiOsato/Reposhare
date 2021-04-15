import React, { useState, useEffect } from "react"
import { View, Pressable, Text } from "react-native"
import Title from "../atoms/Title"
import InputForm from "../molecules/InputForm"
import EditBtn from "../atoms/EditBtn"
import { connect } from "react-redux"
import { encodeEmail } from "../../../redux/Lib"
import db from "../../../firebase/firebase"
import firebase from "firebase"
import * as ImagePicker from "expo-image-picker"

function ProEdit(props) {
  const [Name, setName] = useState("")
  const [Intro, setIntro] = useState("")
  const [url, setUrl] = useState(null)
  const Email = encodeEmail(props.email)

  const doChangeName = (value) => {
    setName(value)
  }

  const doChangeIntro = (value) => {
    setIntro(value)
  }

  // カメラアクセスの要求とエラー処理
  useEffect(() => {
    ;(async () => {
      if (Platform.OS !== "web") {
        const {
          status
        } = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!")
        }
      }
    })()
  }, [])

  const doChangeImg = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      // 要求するメディアタイプの選択
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      // メディアの切り抜き
      allowsEditing: true,
      // 切り抜きのアスペクト比(androidに適用/iosはデフォルトで正方形)
      aspect: [4, 4],
      quality: 1
    })

    console.log(result)

    if (!result.cancelled) {
      setUrl(result.uri)
    }

    
  }

  const doEdit = async () => {
    // ファイルメタデータの作製(jpeg)
    const metadata = {
      contentType: "image/jpeg"
    }
    // 文字列としてurlを生成
    const postIndex = Date.now().toString()
    const storage = firebase.storage()
    const response = await fetch(url)
    const blob = await response.blob()
    const uploadRef = storage.ref("UserImages").child(`${postIndex}`)

    // storageに画像を保存
    await uploadRef.put(blob, metadata).catch(() => {
      alert("画像の保存に失敗しました")
    })

    // storageのダウンロードURLをsetUrlに更新
    await uploadRef
      .getDownloadURL()
      .then((DownloadURL) => {
        setUrl(DownloadURL)
      })
      .catch(() => {
        alert("失敗しました")
      })

    await db.collection("users").doc(Email).set({
      name: Name,
      intro: Intro,
      userImgUrl: url
    })
  }

  return (
    <View>
      <Title />
      <Text>{url}</Text>
      <InputForm
        src={{ uri: url }}
        onChangeName={doChangeName}
        onChangeIntro={doChangeIntro}
        onChangeImg={doChangeImg}
      />
      {/* EditBtnを押すとマイページに飛ぶようにしたい */}
      <Pressable onPress={props.onPress} />
      <EditBtn onPress={doEdit} />
    </View>
  )
}

ProEdit = connect((state) => state)(ProEdit)
export default ProEdit
