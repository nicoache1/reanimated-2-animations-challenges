import React from 'react'
import { StyleSheet, View } from 'react-native'

import { Graph } from './Graph'

interface RainbowChartsProps {}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export const RainbowCharts: React.FC<RainbowChartsProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Graph />
    </View>
  )
}
