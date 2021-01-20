import React from 'react'
import { Pressable } from 'react-native'
import Animated, {
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated'

import { calculateIconTranslationValue } from '../helpers'
import { BUTTON_SIZE } from '../types'
import { styles } from './styles'

interface ItemProps {
  translationX?: number
  translationY?: number
  position: { x: number; y: number }
  enabled: Animated.SharedValue<number>
  iconAnimation: Animated.SharedValue<number>
  onPress: () => void
  text: string
  icon: React.ReactElement
}

const AnimatedTouchable = Animated.createAnimatedComponent(Pressable)

export const Item: React.FC<ItemProps> = ({
  position,
  enabled,
  onPress,
  translationX = 0,
  translationY = 0,
  icon,
  iconAnimation,
}) => {
  const animatedIcon = useAnimatedStyle(() => {
    const translationXValue = calculateIconTranslationValue(translationX)
    const translationYValue = calculateIconTranslationValue(translationY)
    return {
      left: position.x + BUTTON_SIZE / 4 + 25 / 2,
      opacity: interpolate(iconAnimation.value, [0, 1], [0, 1]),
      top: position.y + BUTTON_SIZE / 4 + 25 / 2,
      transform: [
        {
          translateY: interpolate(
            iconAnimation.value,
            [0, 1],
            [translationYValue, translationY],
          ),
        },
        {
          translateX: interpolate(
            iconAnimation.value,
            [0, 1],
            [translationXValue, translationX],
          ),
        },
      ],
    }
  })

  const animatedStyle = useAnimatedStyle(() => ({
    left: position.x + BUTTON_SIZE / 4,
    top: position.y + BUTTON_SIZE / 4,
    transform: [
      {
        translateY: interpolate(enabled.value, [0, 1], [0, translationY]),
      },
      { translateX: interpolate(enabled.value, [0, 1], [0, translationX]) },
    ],
  }))
  return (
    <>
      <AnimatedTouchable
        style={[styles.container, animatedStyle]}
        onPress={onPress}
      />
      <AnimatedTouchable style={[styles.icon, animatedIcon]} onPress={onPress}>
        {icon}
      </AnimatedTouchable>
    </>
  )
}
