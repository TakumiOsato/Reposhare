import React, { useState, useEffect } from "react"
import { View, Text, Button, StyleSheet } from "react-native"
import * as DocumentPicker from "expo-document-picker"
import firebase from "firebase"
import db from "../../firebase/firebase"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
})

// firebase StrageのUrlを入れる変数
let fireUrl

const FileUpLoad = ({ navigation }) => {
  const [uri, setUri] = useState("")
  const [fileName, setFileName] = useState("未選択")

  const doUpLoadDocument = async () => {
    try {
      const file = await DocumentPicker.getDocumentAsync({
        type: "application/pdf"
      })
      if (file.type === "success") {
        setUri(file.uri)
        setFileName(file.name)
      }
    } catch (err) {
      setUri("err")
    }
  }

  const doAdd = async () => {
    // ファイルメタデータの作製(jpeg)
    const metadata = {
      contentType: "application/pdf"
    }
    // 文字列としてurlを生成
    const postIndex = Date.now().toString()
    const storage = firebase.storage()
    // 外部のリソース(fireStrage)にリソース(uri)を簡単に記述するためのAPI,responseで基本的に受け取る
    const response = await fetch(uri)
    // blobでバイナリーデータを生成
    const blob = await response.blob()
    // strageにuploadするための参照
    const uploadRef = storage.ref("reports(PDF)").child(`${postIndex}`)

    // storageに画像を保存
    await uploadRef.put(blob, metadata).catch(() => {
      alert("画像の保存に失敗しました")
    })

    // storageのダウンロードURLをfireUrlに入れる
    await uploadRef
      .getDownloadURL()
      .then((DownloadURL) => {
        fireUrl = DownloadURL
      })
      .catch(() => {
        alert("失敗しました")
      })

    await db.collection("Reports").doc().set({
      reportUri: fireUrl
    })

  }

  return (
    <View style={styles.container}>
      <Text>FileUpLoad</Text>
      <Button onPress={doUpLoadDocument} title="pdfファイルを選ぶ" />
      <Text>選択されたファイル名: {fileName}</Text>
      <Button onPress={doAdd} title="確定" />
      <Button
        onPress={() =>
          navigation.navigate("FileLoad", {
            uri: fireUrl
          })
        }
        title="PDFを見る"
      />
    </View>
  )
}

export default FileUpLoad
