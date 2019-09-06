import React from 'react'
import { StyleSheet, View } from 'react-native'
import AppNavigator from './Navigation/Navigation'
import { Provider } from 'react-redux'
import Store from './Store/configureStore'
function App () {
  return (
    <Provider store={Store}>
      <View style={styles.container}>
        <AppNavigator />
      </View>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
export default App
