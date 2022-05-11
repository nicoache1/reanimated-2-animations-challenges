import React from 'react'
import { Image, Text, TouchableWithoutFeedback, View } from 'react-native'
import Animated, {
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated'
import PositionsCover from 'src/assets/images/spotifyPlayer/ariana_grande_positions.png'
import PlayIcon from 'src/assets/images/spotifyPlayer/Play.svg'

import { MINIMIZED_PLAYER_HEIGHT, SNAP_BOTTOM } from '../types'
import { styles } from './styles'

interface LayoutProps {
  onPress: () => void
  translateY: Animated.SharedValue<number>
}

export const MiniPlayer: React.FC<LayoutProps> = ({ onPress, translateY }) => {
  const animatedMinimizedPlayerStyle = useAnimatedStyle(() => ({
    height: MINIMIZED_PLAYER_HEIGHT,
    left: 0,
    opacity: interpolate(
      translateY.value,
      [SNAP_BOTTOM - MINIMIZED_PLAYER_HEIGHT, SNAP_BOTTOM],
      [0, 1],
    ),
    position: 'absolute',
    right: 0,
    top: 0,
  }))

  return (
    <Animated.View style={animatedMinimizedPlayerStyle}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={PositionsCover} />
          </View>
          <View style={styles.songInfoContainer}>
            <Text style={styles.songName}>Positions</Text>
            <Text style={styles.artistName}>Ariana Grande</Text>
          </View>
          <View style={styles.playContainer}>
            <PlayIcon color={'white'} width={24} height={24} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Animated.View>
  )
}
