import React from 'react'
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native'
import Animated from 'react-native-reanimated'

import { ColorSelectionState } from '../types'

interface LayoutProps {
  colorSelection: ColorSelectionState
  animatedBackgroundStyle: StyleProp<ViewStyle>
}

export const Background: React.FC<LayoutProps> = ({
  colorSelection,
  animatedBackgroundStyle,
}) => {
  return (
    <View
      style={{
        ...StyleSheet.absoluteFillObject,
        backgroundColor: colorSelection.previous.start,
      }}>
      <Animated.View style={animatedBackgroundStyle} />
    </View>
  )
}
