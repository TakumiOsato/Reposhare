import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import HomeStacks from "./navigation/StackNavigator/HomeStacks"

import { PersistGate } from "redux-persist/integration/react"
import { Provider } from "react-redux"
import createStore from "./redux/Redux"

const { store, persistor } = createStore()

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <HomeStacks />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}

export default App
