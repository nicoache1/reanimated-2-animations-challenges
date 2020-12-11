import React from 'react'
import { View } from 'react-native'
import Animated, { useAnimatedProps } from 'react-native-reanimated'
import Svg, { Circle } from 'react-native-svg'

import { styles } from './styles'

interface LayoutProps {
  strokeWidth: number
  r: number
  theta: any
  color: any
  previousColor: any
}

const AnimatedCircle = Animated.createAnimatedComponent(Circle)

export const AnimatedCircular: React.FC<LayoutProps> = ({
  strokeWidth,
  r,
  theta,
  color,
  previousColor,
}) => {
  const radius = r - strokeWidth / 2
  const circumference = radius * 2 * Math.PI

  const props = useAnimatedProps(() => {
    return {
      strokeDashoffset: theta.value * radius,
    }
  })

  return (
    <View style={styles.container}>
      <Svg width="250" height="250" viewBox="0 0 250 250" fill="none">
        <Circle
          cx={r}
          cy={r}
          r={radius}
          stroke={previousColor}
          fill="transparent"
          strokeWidth={strokeWidth}
        />
        <AnimatedCircle
          animatedProps={props}
          cx={r}
          cy={r}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={`${circumference}, ${circumference}`}
        />
      </Svg>
    </View>
  )
}
