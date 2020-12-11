import React from 'react'
import { StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    flex: 1,
  },
})

export const ReflectlyColorSelection: React.FC<{}> = () => {
  return <View style={styles.container} />
}
