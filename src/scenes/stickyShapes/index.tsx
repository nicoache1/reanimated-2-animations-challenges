import { useHeaderHeight } from '@react-navigation/stack'
import React from 'react'
import { Dimensions, StyleSheet } from 'react-native'
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler'
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated'
import { snapPoint } from 'react-native-redash'

import { MAX_HEIGHT, SIZE } from './constants'
import { Square } from './Square'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    bottom: 0,
    left: (width - SIZE) / 2,
    position: 'absolute',
    top: 0,
    width: SIZE,
  },
})

export const StickyShapes: React.FC<{}> = ({}) => {
  const HEADER_HEIGHT = useHeaderHeight()
  const translateY = useSharedValue(0)
  const sticked = useSharedValue(true)
  const isOnTop = useSharedValue(true)
  const sticking = useDerivedValue(() => withSpring(sticked.value ? 1 : 0))

  const gestureHandler = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    any
  >({
    onActive: ({ translationY }) => {
      translateY.value = translationY
      if (translateY.value > MAX_HEIGHT) {
        sticked.value = false
      }
    },
    onEnd: ({ velocityY }) => {
      const destination = snapPoint(translateY.value, velocityY, [
        0,
        height - SIZE - HEADER_HEIGHT,
      ])
      translateY.value = withSpring(
        destination,
        { velocity: velocityY },
        () => {
          sticked.value = true
          if (destination !== 0) {
            isOnTop.value = !isOnTop.value
            translateY.value = 0
          }
        },
      )
    },
    onStart: () => {
      sticked.value = true
      translateY.value = 0
    },
  })

  const progress = useDerivedValue(
    () =>
      sticking.value *
      interpolate(translateY.value, [0, MAX_HEIGHT], [0, 1], Extrapolate.CLAMP),
  )

  const animatedSquare = useAnimatedStyle(() => ({
    transform: [{ translateY: (1 - sticking.value) * translateY.value }],
  }))

  const animatedContainer = useAnimatedStyle(() => ({
    transform: [{ rotate: isOnTop.value ? '0deg' : '180deg' }],
  }))

  return (
    <Animated.View style={[styles.container, animatedContainer]}>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={[StyleSheet.absoluteFill, animatedSquare]}>
          <Square progress={progress} />
        </Animated.View>
      </PanGestureHandler>
    </Animated.View>
  )
}
