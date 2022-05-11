import { useHeaderHeight } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { Dimensions, Image, StyleSheet, View } from 'react-native'
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated'
import BouncingBallImage from 'src/assets/images/bouncingBall/bouncingBall.png'

import { Background } from './Background'

interface BouncingBallProps {}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const VELOCITY = 200
const IMAGE_SIZE = 60
const { width, height } = Dimensions.get('window')

export const BouncingBall: React.FC<BouncingBallProps> = ({}) => {
  const HEADER_SIZE = useHeaderHeight()

  const translationX = useSharedValue<number>(0)
  const translationY = useSharedValue<number>(0)

  useEffect(() => {
    translationX.value = withRepeat(
      withTiming(width - IMAGE_SIZE, {
        duration: ((width - IMAGE_SIZE) * 1000) / VELOCITY,
        easing: Easing.linear,
      }),
      -1,
      true,
    )
    translationY.value = withRepeat(
      withTiming(height - IMAGE_SIZE - HEADER_SIZE, {
        duration: ((height - IMAGE_SIZE - HEADER_SIZE) * 1000) / VELOCITY,
        easing: Easing.linear,
      }),
      -1,
      true,
    )
  }, [HEADER_SIZE, translationX, translationY])

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: translationY.value },
      { translateX: translationX.value },
    ],
  }))

  return (
    <View style={styles.container}>
      <Background />
      <Animated.View style={animatedStyle}>
        <Image
          style={{ height: IMAGE_SIZE, width: IMAGE_SIZE }}
          source={BouncingBallImage}
        />
      </Animated.View>
    </View>
  )
}
