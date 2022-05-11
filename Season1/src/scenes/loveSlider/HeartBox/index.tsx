import React from 'react'
import { StyleProp, StyleSheet, ViewStyle } from 'react-native'
import Animated from 'react-native-reanimated'
import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg'

import { HEART_WIDTH } from '../types'

interface HeartBoxProps {
  animatedStyle: StyleProp<ViewStyle>
  animatedRotation: StyleProp<ViewStyle>
  offset: number
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    left: -HEART_WIDTH / 2,
  },
})

export const HeartBox: React.FC<HeartBoxProps> = ({
  animatedStyle,
  offset,
  animatedRotation,
}) => {
  return (
    <Animated.View style={animatedRotation}>
      <Animated.View style={[styles.container, animatedStyle]}>
        <Svg
          width={`${HEART_WIDTH}`}
          height="49"
          viewBox="0 0 55 49"
          fill="none">
          <Path
            d="M27 47.5C26.1667 46.3333 23.4 42.5 19 36.5H1.5V1.5H54V36.5H36.5L27 47.5Z"
            fill="#295672"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M17.3713 20.6585C18.057 21.7317 23.0633 26.9195 28 32.5L37.9409 20.6585C37.9409 20.6585 40.0763 18.1552 39.9979 16.3659C39.9398 15.0413 39.6663 14.1925 38.6266 13.1463C37.8046 12.3193 37.1038 11.9684 35.884 11.5366C34.8781 11.1805 34.2124 11 33.1414 11C32.0703 11 31.3616 11.1139 30.3987 11.5366C29.408 11.9716 28 13.5 28 13.5C28 13.5 26.819 11.9684 25.5992 11.5366C24.5933 11.1805 23.9606 11 22.8565 11C21.7525 11 21.1198 11.1805 20.1139 11.5366C18.8941 11.9684 17.3713 13.1463 17.3713 13.1463C17.3713 13.1463 16 14.2195 16 16.3659C16 18.5122 16.6857 19.5854 17.3713 20.6585Z"
            fill="url(#paint0_linear)"
          />
          <Defs>
            <LinearGradient
              id="paint0_linear"
              x1="28"
              y1="11"
              x2="28"
              y2="32.5"
              gradientUnits="userSpaceOnUse">
              <Stop offset={offset} stopColor="#4A7C9B" />
              <Stop offset={offset} stopColor="#ED6464" />
            </LinearGradient>
          </Defs>
        </Svg>
      </Animated.View>
    </Animated.View>
  )
}
