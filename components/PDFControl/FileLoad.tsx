import React from "react"
import { View, Text, Button, StyleSheet, SafeAreaView } from "react-native"
import { WebView } from "react-native-webview"
import db from "../../firebase/firebase"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
})

const FileLoad = ({ route }) => {
  // components/PDFControl/FileUpLoadaからデータを取得
  const { uri } = route.params

  return (
    <View style={styles.container}>
      {/* デバイスの適切な位置のみにコンテンツを表示 */}
      <SafeAreaView>
      <Text>{uri}</Text>
        <WebView
          source={{ uri: uri }}
          style={{
            width: 400,
            height: 200,
            backgroundColor: "blue",
            marginTop: 20
          }}
          startInLoadingState={true}
          scalesPageToFit={true}
        />
      </SafeAreaView>
    </View>
  )
}

export default FileLoad
