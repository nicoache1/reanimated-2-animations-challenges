import React from 'react'
import { StyleSheet, View } from 'react-native'

interface BlackFaceProps {}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D6EFFF',
    flex: 1,
    justifyContent: 'center',
  },
})

export const BlackFace: React.FC<BlackFaceProps> = () => {
  return <View style={styles.container} />
}
