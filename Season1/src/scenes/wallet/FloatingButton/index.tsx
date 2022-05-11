import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated'

import { CARD_SIZE } from '../types'

interface FloatingButtonProps {
  floatingButton: Animated.SharedValue<number>
}

const styles = StyleSheet.create({
  add: {
    color: 'white',
    fontSize: 30,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#118ab2',
    borderRadius: 40,
    height: 80,
    justifyContent: 'center',
    width: 80,
  },
  container: {
    alignItems: 'center',
    height: 200,
    justifyContent: 'center',
    ...StyleSheet.absoluteFillObject,
    top: CARD_SIZE * 2,
    zIndex: 0,
  },
})

const { height } = Dimensions.get('window')

export const FloatingButton: React.FC<FloatingButtonProps> = ({
  floatingButton,
}) => {
  const floatingButtonAnimation = useAnimatedStyle(() => ({
    opacity: interpolate(floatingButton.value, [0, 1], [0, 1]),
    transform: [
      {
        translateY: interpolate(
          floatingButton.value,
          [0, 1],
          [height / 2, 0],
          Extrapolate.CLAMP,
        ),
      },
    ],
  }))

  return (
    <Animated.View style={[styles.container, floatingButtonAnimation]}>
      <View style={styles.button}>
        <Text style={styles.add}>+</Text>
      </View>
    </Animated.View>
  )
}
