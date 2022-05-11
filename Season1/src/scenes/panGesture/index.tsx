import { useHeaderHeight } from '@react-navigation/stack'
import React from 'react'
import { Dimensions, View } from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withDecay,
} from 'react-native-reanimated'

import { Card } from './Card'

export const PanGesture: React.FC<{}> = () => {
  const translateX = useSharedValue(0)
  const translateY = useSharedValue(0)

  const headerHeight = useHeaderHeight()
  const height = Dimensions.get('window').height - headerHeight
  const width = Dimensions.get('window').width

  const boundX = width - 300
  const boundY = height - 100

  const onGestureEvent = useAnimatedGestureHandler({
    onActive: (event, context: any) => {
      translateX.value = context.offsetX + event.translationX
      translateY.value = context.offsetY + event.translationY
    },
    onEnd: (event) => {
      translateX.value = withDecay({
        clamp: [0, boundX],
        velocity: event.velocityX,
      })
      translateY.value = withDecay({
        clamp: [0, boundY],
        velocity: event.velocityY,
      })
    },
    onStart: (_event, context: any) => {
      context.offsetX = translateX.value
      context.offsetY = translateY.value
    },
  })

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
    ],
  }))

  return (
    <View style={{ height, width }}>
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View style={animatedStyle}>
          <Card />
        </Animated.View>
      </PanGestureHandler>
    </View>
  )
}
