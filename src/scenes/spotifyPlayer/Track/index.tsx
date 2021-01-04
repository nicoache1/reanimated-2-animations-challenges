import React from 'react'
import { Text, View } from 'react-native'

import { TrackType } from '../types'
import { styles } from './styles'

interface LayoutProps {
  track: TrackType
  artist: string
  index: number
}

export const Track: React.FC<LayoutProps> = ({ track, artist, index }) => (
  <View style={styles.row}>
    <View style={styles.cell}>
      <Text style={styles.index}>{index}</Text>
    </View>
    <View style={[styles.cell, styles.flexible]}>
      <Text style={styles.name}>{track.name}</Text>
      <Text style={styles.artist}>{track.artist || artist}</Text>
    </View>
    <View style={styles.cell}>
      <Text>Hola</Text>
    </View>
  </View>
)
