import React from 'react'
import { Image, Text, View } from 'react-native'
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated'

import { ChanelItem } from '../types'
import { styles } from './styles'
import { MAX_HEIGHT, MIN_HEIGHT } from './types'

interface ItemProps {
  item: ChanelItem
  offsetY: Animated.SharedValue<number>
  index: number
}

export const Item: React.FC<ItemProps> = ({ item, offsetY, index }) => {
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
    <Animated.View style={[styles.container, animatedContainer]}>
      <Image source={item.picture} style={styles.picture} />
      <View style={styles.titleContainer}>
        <Text style={styles.subtitle}>{item.subtitle.toUpperCase()}</Text>
        <View style={styles.mainTitle}>
          <Animated.View style={animatedTitle}>
            <Text style={styles.title}>{item.title.toUpperCase()}</Text>
          </Animated.View>
        </View>
      </View>
    </Animated.View>
  )
}
