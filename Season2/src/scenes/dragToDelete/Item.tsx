import React from 'react'
import { Dimensions, StyleSheet, Text } from 'react-native'
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler'
import Animated, {
  runOnJS,
  SequencedTransition,
  SharedValue,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated'

import { DELETE_ZONE_HEIGHT, ITEM_HEIGHT } from './constants'

const { height } = Dimensions.get('window')

type Offset = {
  x: number
  y: number
}

interface ItemProps {
  index: number
  active: SharedValue<number>
  onDragEnd: (index: number) => void
  item: string
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'red',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    borderRadius: 8,
    height: ITEM_HEIGHT,
    justifyContent: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 15,
    shadowOpacity: 0.1,
  },
})

const isInDeleteZone = (actualYPosition: number) => {
  'worklet'
  return (
    actualYPosition >= height - DELETE_ZONE_HEIGHT && actualYPosition <= height
  )
}

export const Item: React.FC<ItemProps> = ({
  index,
  active,
  onDragEnd,
  item,
}) => {
  const x = useSharedValue(0)
  const y = useSharedValue(0)
  const opacity = useSharedValue(1)

  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    Offset
  >({
    onActive: ({ translationX, translationY }, ctx) => {
      x.value = translationX + ctx.x
      y.value = translationY + ctx.y
    },
    onCancel: () => {
      active.value = -1
    },
    onEnd: ({ absoluteY }) => {
      if (isInDeleteZone(absoluteY)) {
        runOnJS(onDragEnd)(index)
        opacity.value = 0
      }

      x.value = withSpring(0)
      y.value = withSpring(0)
      active.value = -1
    },
    onFail: () => {
      active.value = -1
    },
    onStart: (_, ctx) => {
      active.value = index
      ctx.x = x.value
      ctx.y = y.value
    },
  })

  const style = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [
        { translateX: x.value },
        { translateY: y.value },
        { scaleX: withTiming(active.value === index ? 1.02 : 1) },
        { scaleY: withTiming(active.value === index ? 1.02 : 1) },
      ],
      zIndex: active.value === index ? 100 : -1,
    }
  })

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <Animated.View
        style={[styles.container, style]}
        layout={SequencedTransition.duration(300)}>
        <Text>{item}</Text>
      </Animated.View>
    </PanGestureHandler>
  )
}
