import React from 'react'
import { Dimensions, Image, StyleSheet } from 'react-native'
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated'

import { AlbumType, MAX_HEADER_HEIGHT } from '../types'

interface LayoutProps {
  cover: AlbumType['cover']
  offsetY: Animated.SharedValue<number>
}

const { height } = Dimensions.get('window')

export const Cover: React.FC<LayoutProps> = ({ cover, offsetY }) => {
  const animatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      offsetY.value,
      [0, MAX_HEADER_HEIGHT / 2],
      [1, 0],
      Extrapolate.CLAMP,
    ),
    transform: [
      {
        scale: interpolate(
          offsetY.value,
          [-height, 0],
          [6, 1],
          Extrapolate.CLAMP,
        ),
      },
    ],
  }))

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <Image style={styles.image} source={cover} />
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: MAX_HEADER_HEIGHT,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    height: undefined,
    width: undefined,
  },
})
