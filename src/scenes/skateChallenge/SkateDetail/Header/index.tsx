import React from 'react'
import { Pressable, StyleProp, Text, View, ViewStyle } from 'react-native'
import Animated from 'react-native-reanimated'
import { Path, Svg } from 'react-native-svg'

import { styles } from './styles'

interface LayoutProps {
  title: string
  titleStyle: StyleProp<ViewStyle>
  leftStyle: StyleProp<ViewStyle>
  onPress: () => void
}

export const Header: React.FC<LayoutProps> = ({
  title,
  leftStyle,
  titleStyle,
  onPress,
}) => (
  <View style={styles.headerContainer}>
    <Pressable style={styles.headerLeft} onPress={onPress}>
      <Animated.View style={[styles.headerLeft, leftStyle]}>
        <Svg width="23" height="16" viewBox="0 0 23 16" fill="none">
          <Path
            d="M6.82564 0L0 7.58154L6.82564 15.1631L9.16102 13.1549L7.58154 11.44C6.67897 10.4359 5.83282 9.65744 4.90769 9.03692H22.4062V6.12615H4.87385C5.83282 5.5282 6.64513 4.72718 7.58154 3.72308L9.16102 2.00821L6.82564 0Z"
            fill="black"
          />
        </Svg>
      </Animated.View>
    </Pressable>
    <Animated.View style={[styles.headerTitle, titleStyle]}>
      <Text style={styles.title}>{title}</Text>
    </Animated.View>
  </View>
)
