import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
// import { TouchableOpacity } from 'react-native-gesture-handler'
// import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated'

import { HomeItem } from '../types'
import { styles } from './styles'
import { MAX_HEIGHT, MIN_HEIGHT } from './types'

interface ItemProps {
  item: HomeItem
  offsetY: Animated.SharedValue<number>
  index: number
  onPress: () => void
}

export const Item: React.FC<ItemProps> = ({
  item,
  offsetY,
  index,
  onPress,
}) => {
  const inputRange = [(index - 1) * MAX_HEIGHT, index * MAX_HEIGHT]
  const animatedContainer = useAnimatedStyle(() => ({
    height: interpolate(
      -offsetY.value,
      inputRange,
      [MIN_HEIGHT, MAX_HEIGHT],
      Extrapolate.CLAMP,
    ),
    top: offsetY.value,
  }))

  const animatedTitle = useAnimatedStyle(() => ({
    opacity: interpolate(-offsetY.value, inputRange, [0, 1], Extrapolate.CLAMP),
  }))

  return (
    <Animated.View
      style={[styles.container, animatedContainer, item.backgroundStyle]}>
      <TouchableOpacity style={styles.titleContainer} onPress={onPress}>
        <>
          <Text style={styles.subtitle}>{item.subtitle.toUpperCase()}</Text>
          <View style={styles.mainTitle}>
            <Animated.View style={animatedTitle}>
              <Text style={styles.title}>{item.title.toUpperCase()}</Text>
            </Animated.View>
          </View>
        </>
      </TouchableOpacity>
    </Animated.View>
  )
}
