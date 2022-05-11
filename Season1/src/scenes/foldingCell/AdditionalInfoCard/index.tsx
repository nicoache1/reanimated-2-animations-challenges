import React from 'react'
import { StyleSheet, View } from 'react-native'

import { ThickDarkGrayLine, ThinGrayLine } from '../Lines'

interface AdditionalInfoCardProps {}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
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

export const AdditionalInfoCard: React.FC<AdditionalInfoCardProps> = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.flexible}>
        <ThickDarkGrayLine width={100} />
        <ThinGrayLine width={80} />
      </View>

      <View style={styles.flexible}>
        <ThickDarkGrayLine width={60} />
        <ThinGrayLine width={120} />
      </View>
    </View>
  )
}
