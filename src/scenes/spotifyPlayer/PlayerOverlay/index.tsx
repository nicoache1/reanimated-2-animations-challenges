import React from 'react'
import { StyleSheet } from 'react-native'
import Animated, {
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated'

import { MINIMIZED_PLAYER_HEIGHT, SNAP_BOTTOM } from '../types'

interface LayoutProps {
  translateY: Animated.SharedValue<number>
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#272829',
  },
})

export const PlayerOverlay: React.FC<LayoutProps> = ({ translateY }) => {
  const animatedOverlayStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      translateY.value,
      [
        SNAP_BOTTOM - MINIMIZED_PLAYER_HEIGHT * 2,
        SNAP_BOTTOM - MINIMIZED_PLAYER_HEIGHT,
      ],
      [0, 1],
    ),
  }))

  return (
    <Animated.View
      style={[styles.container, animatedOverlayStyle]}
      pointerEvents="none"
    />
  )
}
