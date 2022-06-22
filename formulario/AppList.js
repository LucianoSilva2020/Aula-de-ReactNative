import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function AppList() {
  return (
    <View style={styles.container}>
      <Text>List</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AABBCC',
    alignItems: 'center',
    justifyContent: 'center',

  }
})