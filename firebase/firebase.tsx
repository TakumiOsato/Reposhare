import firebase from "firebase"
import "firebase/auth"
import "firebase/database"
import "firebase/firestore"
import "firebase/functions"
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCC5_l30JBSXlFCgAXT-AIk3-aapdRqvOs",
  authDomain: "reposhare-fe334.firebaseapp.com",
  projectId: "reposhare-fe334",
  storageBucket: "reposhare-fe334.appspot.com",
  messagingSenderId: "159442369156",
  appId: "1:159442369156:web:b5fdd369312990a62760d1",
  measurementId: "G-8BVS646ENQ"
}

//　複数回firebase.initializeApp(firebaseConfig)が呼ばれるのを防ぐ

const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()

const db = firebaseApp.firestore()

export default db
