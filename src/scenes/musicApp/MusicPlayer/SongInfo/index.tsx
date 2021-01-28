import React from 'react'
import { Text, View } from 'react-native'

import { styles } from './styles'

interface SongInfoProps {}

export const SongInfo: React.FC<SongInfoProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Author</Text>
      <Text style={styles.text}>Song name</Text>
    </View>
  )
}
