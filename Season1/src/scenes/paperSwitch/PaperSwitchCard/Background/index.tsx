import React from 'react'
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native'
import Animated from 'react-native-reanimated'

interface LayoutProps {
  colorSelection: string
  animatedBackgroundStyle: StyleProp<ViewStyle>
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    overflow: 'hidden',
  },
})

export const Background: React.FC<LayoutProps> = ({
  colorSelection,
  animatedBackgroundStyle,
}) => {
  return (
    <View
      style={[
        {
          backgroundColor: colorSelection,
        },
        styles.container,
      ]}>
      <Animated.View style={animatedBackgroundStyle} />
    </View>
  )
}
