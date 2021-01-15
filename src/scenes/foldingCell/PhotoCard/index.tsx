import React from 'react'
import { StyleSheet, View } from 'react-native'

import { ThickWhiteLine, ThinGrayLine } from '../Lines'

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    justifyContent: 'flex-end',
  },
  container: {
    backgroundColor: '#33373B',
    flex: 1,
    flexDirection: 'column',
    padding: 10,
  },
})

interface PhotoCardProps {
  onPress: () => void
}

export const PhotoCard: React.FC<PhotoCardProps> = ({ onPress }) => (
  <View style={styles.container}>
    <View
      style={{
        backgroundColor: '#5A4A9C',
        flexDirection: 'row',
        height: 40,
        justifyContent: 'space-between',
        padding: 10,
      }}>
      <ThickWhiteLine width={40} onPress={onPress} />
      <ThickWhiteLine width={60} />
      <ThickWhiteLine width={40} />
    </View>

    <View style={styles.card}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
          paddingBottom: 0,
        }}>
        <ThinGrayLine width={40} />
        <ThinGrayLine width={80} />
        <ThinGrayLine width={50} onPress={onPress} />
      </View>
    </View>
  </View>
)
