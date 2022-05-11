import React from 'react'
import { StyleProp, Text, View, ViewStyle } from 'react-native'
import Animated from 'react-native-reanimated'

import { styles } from './styles'

interface LayoutProps {
  price: string
  animatedStyle: StyleProp<ViewStyle>
}

export const PriceLabel: React.FC<LayoutProps> = ({ price, animatedStyle }) => (
  <Animated.View style={[styles.container, animatedStyle]}>
    <View style={styles.labelContainer}>
      <Text style={styles.price}>{price}</Text>
    </View>
  </Animated.View>
)
