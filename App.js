import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginComponent from './src/LoginComponent'

const App = () => {
  return (
    <View style={styles.parentContainter}>
      <LoginComponent/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  parentContainter:{
    flex:1
  }
})
