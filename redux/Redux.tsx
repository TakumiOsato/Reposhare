import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from "redux"
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage"

const createStore = () => {
  //persistの設定
  const persistConfig = {
    key: "root", // Storageに保存されるキー名を指定する
    storage  // 保存先としてlocalStorageがここで設定される
  }

  const initial = {
    login: false,
    userName: "(click here!)",
    email: ""
  }

  const FireReducer = (state = initial, action) => {
    switch (action.type) {
      case "UPDATE_USER":
        return action.value
      default:
        return state
    }
  }

  // //reducerまとめ
  // const rootReducer = combineReducers({
  //   userData: FireReducer
  // })

  //persistConfig + reducersで永続化されたpersistedReducerを作る
  const persistedReducer = persistReducer(persistConfig, FireReducer)

  //store作成時にreducerとしてpersistedReducerを渡してやる
  let store = reduxCreateStore(
    persistedReducer,
    applyMiddleware()
    //thunk
  )
  //persistorを定義
  let persistor = persistStore(store)

  //戻す
  return { store, persistor }
}

// Initial state of the store

export default createStore
