import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler'
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated'
import { clamp } from 'react-native-redash'
import { transformOrigin } from 'src/common/transformations'

import { HeartBox } from './HeartBox'
import { Slider } from './Slider'
import { HORIZONTAL_PADDING, NORMALIZED_WIDTH } from './types'

interface LoveSliderProps {}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#295672',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: HORIZONTAL_PADDING,
  },
})

export const LoveSlider: React.FC<LoveSliderProps> = ({}) => {
  const translateX = useSharedValue<number>(0)
  const rotation = useSharedValue<number>(0)
  const goToRight = useSharedValue<boolean>(true)
  const [offsetHeart, setOffsetHeart] = useState(1)
  const [offsetSlider, setOffsetSlider] = useState(0)

  const gestureHandler = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    { offsetX: number }
  >({
    onActive: ({ translationX }, context) => {
      translateX.value = clamp(
        translationX + context.offsetX,
        0,
        NORMALIZED_WIDTH,
      )

      goToRight.value = translationX > 0
      rotation.value = withSpring(15)

      const newOffsetSlider = interpolate(
        translateX.value,
        [0, NORMALIZED_WIDTH],
        [0, 1],
        Extrapolate.CLAMP,
      )

      const newOffsetHeart = interpolate(
        translateX.value,
        [0, NORMALIZED_WIDTH],
        [1, 0],
        Extrapolate.CLAMP,
      )

      runOnJS(setOffsetSlider)(newOffsetSlider)
      runOnJS(setOffsetHeart)(newOffsetHeart)
    },
    onEnd: () => {
      rotation.value = withSpring(0)
    },
    onStart: (_event, context) => {
      context.offsetX = translateX.value
    },
  })

  const animatedStyle = useAnimatedStyle(() => {
    const transform = transformOrigin({ x: -170, y: 50 }, [
      { rotateZ: `${goToRight.value ? rotation.value : -rotation.value}deg` },
    ]) as any
    return {
      transform: [...transform],
    }
  })
  const animatedRotation = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    }
  })

  return (
    <View style={styles.container}>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View>
          <HeartBox
            animatedStyle={animatedStyle}
            offset={offsetHeart}
            animatedRotation={animatedRotation}
          />
          <Slider offset={offsetSlider} />
        </Animated.View>
      </PanGestureHandler>
    </View>
  )
}
