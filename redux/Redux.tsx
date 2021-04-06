import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from "redux"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { persistReducer, persistStore } from "redux-persist"

const createStore = () => {
  //persistの設定
  const persistConfig = {
    key: "root", // Storageに保存されるキー名を指定する
    storage: AsyncStorage, // 保存先としてlocalStorageがここで設定される
    // whitelist: ["email"] // Storageに保存するstateを指定
  }

  const initial = {
    email: "no data"
  }

  const FireReducer = (state = initial, action) => {
    switch (action.type) {
      case "USER_EMAIL":
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
  const store = reduxCreateStore(
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

// import { createStore, compose, applyMiddleware } from "redux"
// import { persistStore, persistCombineReducers } from "redux-persist"
// import AsyncStorage from "@react-native-async-storage/async-storage"
// import { createLogger } from "redux-logger"

// import rootReducers from "app/reducers" // where reducers is a object of reducers

// const config = {
//   // 保存データのrootキー
//   key: "root",
//   // React NativeなのでAsyncStorageを使用
//   storage: AsyncStorage,
//   // loadingReducerは保存しないようにする、whitelistも可能
//   blacklist: ["loadingReducer"],
//   debug: true //to get useful logging
// }

// const middleware = []

// if (__DEV__) {
//   middleware.push(createLogger())
// }

// const reducers = persistCombineReducers(config, rootReducers)
// const enhancers = [applyMiddleware(...middleware)]

// const persistConfig = { enhancers }
// const store = createStore(reducers, undefined, compose(...enhancers))
// const persistor = persistStore(store, persistConfig, () => {
//   console.log("テスト", store.getState())
// })
// const configureStore = () => {
//   return { persistor, store }
// }

// export default configureStore
