import React from "react"
import { StyleSheet } from 'react-native';
import Btn from "../../../elements/Btn"

const RegBtn = (props) => {
  return <Btn Buttonstyle={styles.btn}onPress={props.OnPress} title={"新規登録する"} />
}

const styles = StyleSheet.create({
btn: {
    height: 48,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    width: '60%',
    alignSelf: 'center',
  },
})
export default RegBtn
