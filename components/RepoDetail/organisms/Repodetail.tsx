import React, { useEffect, useState } from "react"
import { View } from "react-native"
import Title from "../atoms/Title"
import RepoInfo from "../molecules/RepoInfo"
import ReqBtn from "../atoms/ReqBtn"
import db from "../../../firebase/firebase"
import { connect } from "react-redux"
import { encodeEmail } from "../../../redux/Lib"

let title = ""
let repoImgUrl = ""
let due = ""
let price = ""
let detail = ""

function Repodetail(props) {
  const [update, setUpdata] = useState(false)
  // reportIdを取得

  const getRepoData = async () => {
    await db
      .collection("reports")
      // .doc(reportId)
      .get()
      .then((doc) => {
        const repoData = doc.data()
        title = repoData.title
        repoImgUrl = repoData.repoImgUrl
        due = repoData.due
        price = repoData.price
        detail = repoData.detail
      })
    setUpdata(update ? false : true)
  }

  useEffect(() => {
    getRepoData()
  }, [])

  return (
    <View>
      <Title repoTitle={title} />
      <RepoInfo src={repoImgUrl} due={due} price={price} detail={detail} />
      <ReqBtn onPress={props.onPress} />
    </View>
  )
}

Repodetail = connect((state) => state)(Repodetail)
export default Repodetail
