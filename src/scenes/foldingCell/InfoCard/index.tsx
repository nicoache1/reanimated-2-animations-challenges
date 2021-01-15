import React from 'react'
import { StyleSheet, View } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

import {
  ThickDarkGrayLine,
  ThickGrayLine,
  ThinGrayLine,
  ThinRedLine,
} from '../Lines'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'row',
  },
  leftPane: {
    backgroundColor: '#33373B',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 16,
  },
  rightPane: {
    backgroundColor: '#fff',
    flex: 2,
    padding: 16,
  },
})

interface InfoCardProps {
  onPress: () => void
}

export const InfoCard: React.FC<InfoCardProps> = ({ onPress }) => (
  <View style={styles.container}>
    <View style={styles.leftPane}>
      <ThickGrayLine />
      <View>
        <TouchableWithoutFeedback onPress={onPress}>
          <ThinRedLine />
        </TouchableWithoutFeedback>
        <ThickGrayLine width={80} />
      </View>
    </View>

    <View style={styles.rightPane}>
      <View style={{ flex: 1 }}>
        <ThickGrayLine width={140} />
        <ThickGrayLine width={160} />
      </View>

      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1 }}>
          <ThinGrayLine width={60} />
          <ThickDarkGrayLine width={60} />
        </View>

        <View style={{ flex: 1 }}>
          <ThinGrayLine width={60} />
          <ThickDarkGrayLine width={60} />
        </View>
      </View>
    </View>
  </View>
)
