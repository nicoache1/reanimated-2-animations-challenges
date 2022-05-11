import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated'

import { WalletDetailItem } from '../types'
import { styles } from './styles'

interface ItemProps {
  item: WalletDetailItem
  delay: number
}

export const Item: React.FC<ItemProps> = ({ item, delay }) => {
  const animationProgress = useSharedValue<number>(0)

  useEffect(() => {
    animationProgress.value = withDelay(delay, withTiming(1))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      animationProgress.value,
      [0, 1],
      [0, 1],
      Extrapolate.CLAMP,
    ),
  }))

  return (
    <Animated.View
      key={`${item.title}`}
      style={[styles.container, animatedStyle]}>
      <View style={styles.informationContainer}>
        <View style={styles.informationSubContainer}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <View style={styles.informationSubContainer}>
          <Text>{item.subtitle}</Text>
        </View>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </Animated.View>
  )
}
