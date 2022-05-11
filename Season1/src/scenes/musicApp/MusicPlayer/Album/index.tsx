import React, { useEffect } from 'react'
import { View } from 'react-native'
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated'
import { SharedElement } from 'react-navigation-shared-element'

import { styles } from './styles'

interface AlbumProps {
  id: string
}

export const Album: React.FC<AlbumProps> = ({ id }) => {
  const progress = useSharedValue<number>(0)

  useEffect(() => {
    progress.value = withDelay(300, withTiming(1))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const animatedDisc = useAnimatedStyle(() => ({
    opacity: interpolate(
      progress.value,
      [0, 0.5, 1],
      [0, 0, 1],
      Extrapolate.CLAMP,
    ),
    right: interpolate(progress.value, [0, 1], [150, 40], Extrapolate.CLAMP),
  }))

  return (
    <SharedElement id={id} style={styles.container}>
      <View style={[styles.album, styles.shadow]} />
      <Animated.View style={[styles.disc, styles.shadow, animatedDisc]} />
    </SharedElement>
  )
}
