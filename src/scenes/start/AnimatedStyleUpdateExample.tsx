import React from 'react'
import { Button, View } from 'react-native'
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

import { styles } from './styles'

export const AnimatedStyleUpdateExample = () => {
  const randomWidth = useSharedValue(10)

  const config = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  }

  const style = useAnimatedStyle(() => {
    return {
      width: withTiming(randomWidth.value, config),
    }
  })

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, style]} />
      <Button
        title="toggle"
        onPress={() => {
          randomWidth.value = Math.random() * 350
        }}
      />
    </View>
  )
}
