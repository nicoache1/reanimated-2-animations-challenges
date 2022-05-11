import React from 'react'
import { Dimensions } from 'react-native'
import Animated, { Extrapolate, interpolate } from 'react-native-reanimated'
import { useAnimatedStyle } from 'react-native-reanimated'
import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg'

interface BackgroundProps {
  accelerometer: any
}

const { width, height } = Dimensions.get('window')

export const Background: React.FC<BackgroundProps> = ({ accelerometer }) => {
  const sunStyle = useAnimatedStyle(() => {
    const yaw = Math.abs(accelerometer.sensor.value.y)

    return {
      bottom: 0,
      left: 0,
      opacity: interpolate(yaw * 100, [20, 60], [1, 0], Extrapolate.CLAMP),
      position: 'absolute',
      right: 0,
      top: 0,
      zIndex: interpolate(yaw * 100, [20, 60], [1, 0], Extrapolate.CLAMP),
    }
  })

  const nightStyle = useAnimatedStyle(() => {
    const yaw = Math.abs(accelerometer.sensor.value.y)

    return {
      bottom: 0,
      left: 0,
      opacity: interpolate(yaw * 100, [20, 60], [0, 1], Extrapolate.CLAMP),
      position: 'absolute',
      right: 0,
      top: 0,
      zIndex: interpolate(yaw * 100, [20, 60], [0, 1], Extrapolate.CLAMP),
    }
  })

  return (
    <>
      <Animated.View style={sunStyle}>
        <Svg
          width={width}
          height={height}
          viewBox="0 0 375 812"
          fill="none"
          preserveAspectRatio="xMinYMin slice">
          <Path d="M375 0H0V812H375V0Z" fill="url(#paint0_linear_802_502)" />
          <Defs>
            <LinearGradient
              id="paint0_linear_802_502"
              x1="187.073"
              y1="507.169"
              x2="201.357"
              y2="97.6285"
              gradientUnits="userSpaceOnUse">
              <Stop offset="0.07" stopColor="#F7C5C1" />
              <Stop offset="0.27" stopColor="#F6CFCD" />
              <Stop offset="0.71" stopColor="#F5E1E1" />
              <Stop offset="1" stopColor="#F4E7E8" />
            </LinearGradient>
          </Defs>
        </Svg>
      </Animated.View>
      <Animated.View style={nightStyle}>
        <Svg
          width={width}
          height={height}
          viewBox="0 0 375 812"
          fill="none"
          preserveAspectRatio="xMinYMin slice">
          <Path d="M375 0H0V812H375V0Z" fill="url(#paint0_linear_802_504)" />
          <Defs>
            <LinearGradient
              id="paint0_linear_802_504"
              x1="187.073"
              y1="507.169"
              x2="201.357"
              y2="97.6285"
              gradientUnits="userSpaceOnUse">
              <Stop offset="0.07" stopColor="#464654" />
              <Stop offset="0.27" stopColor="#363642" />
              <Stop offset="0.520577" stopColor="#202030" />
              <Stop offset="1" stopColor="#0F0F16" />
            </LinearGradient>
          </Defs>
        </Svg>
      </Animated.View>
    </>
  )
}
