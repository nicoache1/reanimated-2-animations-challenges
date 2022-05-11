import React, { useMemo } from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import {
  TapGestureHandler,
  TapGestureHandlerGestureEvent,
} from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
} from 'react-native-reanimated'

import { ReflectlyColor } from '../types'

interface LayoutProps {
  color: ReflectlyColor
  index: number
  colorWidth: number
  radius: number
  onPress: (position: { x: number; y: number }, index: number) => void
  synusoid: any
}

export const ColorItem: React.FC<LayoutProps> = ({
  color,
  colorWidth,
  radius,
  index,
  onPress,
  synusoid,
}) => {
  const styles = useMemo(
    () => ({
      container: {
        alignItems: 'center',
        width: colorWidth,
      },
      gradient: {
        borderColor: 'white',
        borderRadius: radius,
        borderWidth: 6,
        height: radius * 2,
        width: radius * 2,
      },
    }),
    [colorWidth, radius],
  )
  const tapGestureEvent = useAnimatedGestureHandler<
    TapGestureHandlerGestureEvent,
    any
  >(
    {
      onActive: ({ absoluteX: x, absoluteY: y }) => {
        runOnJS(onPress)({ x, y }, index)
      },
    },
    [onPress],
  )

  const animatedStyle = synusoid(index)

  return (
    <Animated.View
      style={[styles.container as StyleProp<ViewStyle>, animatedStyle]}>
      <TapGestureHandler onGestureEvent={tapGestureEvent}>
        <Animated.View>
          <LinearGradient
            colors={[color.start, color.end]}
            style={styles.gradient}
          />
        </Animated.View>
      </TapGestureHandler>
    </Animated.View>
  )
}
