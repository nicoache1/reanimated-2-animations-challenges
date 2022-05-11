import React from 'react'
import { StyleSheet, View } from 'react-native'
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler'
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated'
import { clamp, snapPoint } from 'react-native-redash'
import { Item } from 'src/scenes/chanelScroll/Item'
import { MAX_HEIGHT } from 'src/scenes/chanelScroll/Item/types'

import { items } from './items'

interface ChanelScrollProps {}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const snapPoints = items.map((_, index) => index * -MAX_HEIGHT)

export const ChanelScroll: React.FC<ChanelScrollProps> = ({}) => {
  const translateY = useSharedValue<number>(0)

  const gestureHandler = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    { offsetY: number }
  >({
    onActive: ({ translationY }, context) => {
      translateY.value = clamp(
        translationY + context.offsetY,
        -(items.length - 1) * MAX_HEIGHT,
        0,
      )
    },
    onEnd: ({ velocityY }) => {
      const destination = snapPoint(translateY.value, velocityY, snapPoints)
      translateY.value = withSpring(destination, {
        overshootClamping: true,
        velocity: velocityY,
      })
    },
    onStart: (_event, context) => {
      context.offsetY = translateY.value
    },
  })

  return (
    <View style={styles.container}>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View>
          {items.map((item, index) => (
            <Item item={item} key={index} index={index} offsetY={translateY} />
          ))}
        </Animated.View>
      </PanGestureHandler>
    </View>
  )
}
