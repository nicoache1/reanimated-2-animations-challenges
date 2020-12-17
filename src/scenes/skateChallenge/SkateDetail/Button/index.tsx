import React from 'react'
import { StyleProp, Text, ViewStyle } from 'react-native'
import Animated from 'react-native-reanimated'

import { styles } from './styles'

interface LayoutProps {
  animatedStyle: StyleProp<ViewStyle>
}

export const Button: React.FC<LayoutProps> = ({ animatedStyle }) => (
  <Animated.View style={[styles.container, animatedStyle]}>
    <Text style={styles.text}>ADD TO CART</Text>
  </Animated.View>
)
