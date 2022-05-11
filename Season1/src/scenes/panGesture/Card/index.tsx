import React from 'react'
import { StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'blue',
    elevation: 3,
    height: 100,
    shadowColor: '#000',
    shadowOffset: {
      height: 1,
      width: 0,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    width: 300,
  },
})

export const Card: React.FC<{}> = () => <View style={styles.card} />
