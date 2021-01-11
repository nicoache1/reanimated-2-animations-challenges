import React from 'react'
import { Text, View } from 'react-native'
import {
  TapGestureHandler,
  TapGestureHandlerGestureEvent,
} from 'react-native-gesture-handler'
import Animated, {
  interpolate,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated'

import { styles } from './styles'

interface LayoutProps {
  label: String
  onPress: () => void
  scrollAnimation: Animated.SharedValue<number>
}

export const Item: React.FC<LayoutProps> = ({
  label,
  onPress,
  scrollAnimation,
}) => {
  const progress = useSharedValue<number>(0)

  const tapGestureEvent = useAnimatedGestureHandler<
    TapGestureHandlerGestureEvent,
    any
  >({
    onActive: () => {
      progress.value = withSpring(1, undefined, () => {
        progress.value = 0
        runOnJS(onPress)()
      })
    },
  })

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: interpolate(progress.value, [0, 0.5, 1], [1, 1.1, 1]) },
      {
        scaleY: interpolate(scrollAnimation.value, [0, 1], [1, 0.85]),
      },
    ],
  }))

  return (
    <TapGestureHandler onGestureEvent={tapGestureEvent}>
      <Animated.View style={[styles.container, animatedStyle]}>
        <View style={styles.row}>
          <Text style={styles.text}>{label}</Text>
        </View>
      </Animated.View>
    </TapGestureHandler>
  )
}
