import React from 'react'
import { Dimensions } from 'react-native'
import Animated, { Extrapolate, interpolate } from 'react-native-reanimated'
import { useAnimatedStyle } from 'react-native-reanimated'
import MoonSVG from 'src/assets/images/moon.svg'
import SunSVG from 'src/assets/images/sun.svg'

interface StarProps {
  accelerometer: any
}

const { width, height } = Dimensions.get('window')

export const Star: React.FC<StarProps> = ({ accelerometer }) => {
  const sunStyle = useAnimatedStyle(() => {
    const yaw = Math.abs(accelerometer.sensor.value.y)

    return {
      position: 'absolute',
      right: width * 0.05,
      top: height * 0.05,
      transform: [
        {
          translateX: interpolate(
            yaw * 100,
            [20, 60],
            [0, 200],
            Extrapolate.CLAMP,
          ),
        },
        {
          translateY: interpolate(
            yaw * 100,
            [20, 60],
            [0, -200],
            Extrapolate.CLAMP,
          ),
        },
      ],
      zIndex: 10,
    }
  })

  const moonStyle = useAnimatedStyle(() => {
    const yaw = Math.abs(accelerometer.sensor.value.y)

    return {
      position: 'absolute',
      right: width * 0.05,
      top: height * 0.05,
      transform: [
        {
          translateX: interpolate(
            yaw * 100,
            [20, 60],
            [200, 0],
            Extrapolate.CLAMP,
          ),
        },
        {
          translateY: interpolate(
            yaw * 100,
            [20, 60],
            [-200, 0],
            Extrapolate.CLAMP,
          ),
        },
      ],
      zIndex: 12,
    }
  })

  return (
    <>
      <Animated.View style={sunStyle}>
        <SunSVG />
      </Animated.View>
      <Animated.View style={moonStyle}>
        <MoonSVG />
      </Animated.View>
    </>
  )
}
