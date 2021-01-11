import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated'

import { ChanelItem } from '../types'

interface ItemProps {
  item: ChanelItem
  offsetY: Animated.SharedValue<number>
  index: number
}

const { width, height } = Dimensions.get('window')
export const MIN_HEIGHT = 128
export const MAX_HEIGHT = height / 2

const styles = StyleSheet.create({
  container: {
    height: MIN_HEIGHT,
    justifyContent: 'flex-end',
    width,
  },
  mainTitle: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    padding: 32,
    transform: [{ translateY: 64 }],
  },
  picture: {
    ...StyleSheet.absoluteFillObject,
    height: undefined,
    width: undefined,
  },
  subtitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    color: 'white',
    fontSize: 32,
    fontWeight: '500',
    textAlign: 'center',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    maxHeight: MAX_HEIGHT * 0.61,
  },
})

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
