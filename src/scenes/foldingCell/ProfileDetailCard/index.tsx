import React from 'react'
import { StyleSheet, View } from 'react-native'

import { ThickGrayLine, ThinGrayLine } from '../Lines'

const styles = StyleSheet.create({
  container: {
    borderTopColor: '#BDC2C9',
    borderTopWidth: StyleSheet.hairlineWidth,
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  flexible: {
    flex: 1,
  },
})

export const ProfileDetailCard = ({}) => (
  <View style={styles.container}>
    <View style={styles.flexible}>
      <ThickGrayLine width={60} />
      <ThinGrayLine width={120} />
    </View>

    <View style={styles.flexible}>
      <ThickGrayLine width={60} />
      <ThinGrayLine width={120} />
    </View>
  </View>
)
