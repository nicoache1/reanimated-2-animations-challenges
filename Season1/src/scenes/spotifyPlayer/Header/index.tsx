import React from 'react'
import { Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated'

import { AlbumType, HEADER_DELTA, MAX_HEADER_HEIGHT } from '../types'
import { styles } from './styles'

interface LayoutProps {
  artist: AlbumType['artist']
  offsetY: Animated.SharedValue<number>
}

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient)

export const Header: React.FC<LayoutProps> = ({ artist, offsetY }) => {
  const animatedOpacity = useAnimatedStyle(() => ({
    opacity: interpolate(
      offsetY.value,
      [0, MAX_HEADER_HEIGHT / 2],
      [0, 1],
      Extrapolate.CLAMP,
    ),
    transform: [
      {
        translateY: interpolate(
          offsetY.value,
          [0, MAX_HEADER_HEIGHT / 10],
          [-100, 0],
          Extrapolate.CLAMP,
        ),
      },
    ],
  }))

  const animatedGradient = useAnimatedStyle(() => ({
    opacity: interpolate(
      offsetY.value,
      [0, MAX_HEADER_HEIGHT / 1.5],
      [1, 0],
      Extrapolate.CLAMP,
    ),
  }))

  const animatedTitle = useAnimatedStyle(() => ({
    opacity: interpolate(
      offsetY.value,
      [HEADER_DELTA - 8, HEADER_DELTA - 4],
      [0, 1],
      Extrapolate.CLAMP,
    ),
    transform: [
      {
        translateY: interpolate(
          offsetY.value,
          [0, MAX_HEADER_HEIGHT],
          [50, 0],
          Extrapolate.CLAMP,
        ),
      },
    ],
  }))

  return (
    <Animated.View style={[styles.container, animatedOpacity]}>
      <AnimatedLinearGradient
        style={[styles.container, animatedGradient]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={['rgb(74, 67, 56)', 'rgb(48, 44, 37)', 'transparent']}
      />
      <Animated.View style={[styles.titleContainer, animatedTitle]}>
        <Text style={styles.title}>{artist}</Text>
      </Animated.View>
    </Animated.View>
  )
}
