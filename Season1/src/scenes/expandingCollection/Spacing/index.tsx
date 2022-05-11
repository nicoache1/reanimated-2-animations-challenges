import React from 'react'
import { StyleSheet, View } from 'react-native'

import { SPACER_SIZE } from '../constants'

interface SpacingProps {}

const styles = StyleSheet.create({
  container: {
    width: SPACER_SIZE,
  },
})

export const Spacing: React.FC<SpacingProps> = ({}) => {
  return <View style={styles.container} />
}
