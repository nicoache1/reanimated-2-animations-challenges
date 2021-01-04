import React from 'react'
import { View } from 'react-native'

import { Content } from '../Content'
import { Cover } from '../Cover'
import { ShufflePlay } from '../ShufflePlay'
import { AlbumType } from '../types'
import { styles } from './styles'

interface LayoutProps extends AlbumType {}

export const Album: React.FC<LayoutProps> = ({ artist, cover, tracks }) => {
  return (
    <View style={styles.container}>
      <Cover cover={cover} />
      <Content artist={artist} tracks={tracks} />
      <View style={styles.SuffleContainer}>
        <ShufflePlay />
      </View>
    </View>
  )
}
