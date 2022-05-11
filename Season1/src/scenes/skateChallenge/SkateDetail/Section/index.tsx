import React from 'react'
import { StyleProp, Text, ViewStyle } from 'react-native'
import Animated from 'react-native-reanimated'

import { styles } from './styles'

interface LayoutProps {
  title: string
  description: string
  animatedStyle: StyleProp<ViewStyle>
}

export const Section: React.FC<LayoutProps> = ({
  title,
  description,
  animatedStyle,
}) => (
  <Animated.View style={[styles.container, animatedStyle]}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.description}>{description}</Text>
  </Animated.View>
)
