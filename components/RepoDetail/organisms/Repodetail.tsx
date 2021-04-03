import React, { useEffect, useState } from "react"
import { View } from "react-native"
import Title from "../atoms/Title"
import RepoInfo from "../molecules/RepoInfo"
import ReqBtn from "../atoms/ReqBtn"
import db from "../../../firebase/firebase"

let repoData = ""
let title = ""
let repoImgUrl = ""
let due = ""
let price = ""
let detail = ""

function Repodetail(props) {
  const [update, setUpdata] = useState(false)
  // const router = useRouter()
  // const email = props.email

  const getRepoData = async () => {
    //reduxからidをとってくる
    await db
      .collection("reports")
      // .doc()
      .get()
      .then((doc) => {
        repoData = doc.data()
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

export default Repodetail
