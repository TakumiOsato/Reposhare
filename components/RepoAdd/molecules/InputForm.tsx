import React from "react"
import { View } from "react-native"
import Caption from "../atoms/Caption"
import TitleInput from "../atoms/TitleInput"
import PriceInput from "../atoms/PriceInput"
import CategoryInput from "../atoms/CategoryInput"
import DueInput from "../atoms/DueInput"
import DetailInput from "../atoms/DetailInput"

const InputForm = (props) => {
  return (
    <View>
      <Caption caption={"レポート名"} />
      <TitleInput onChangeText={props.onChangeTitle} />
      <Caption caption={"値段"} />
      <PriceInput onChangeText={props.onChangePrice} />
      <Caption caption={"カテゴリー"} />
      <CategoryInput onChangeText={props.onChangeCategory} />
      <Caption caption={"期限"} />
      <DueInput onChangeText={props.onChangeDue} />
      <Caption caption={"詳細"} />
      <DetailInput onChangeText={props.onChangeDetail} />
    </View>
  )
}

export default InputForm
