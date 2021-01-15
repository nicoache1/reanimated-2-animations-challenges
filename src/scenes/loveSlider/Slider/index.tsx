import React from 'react'
import { StyleSheet, View } from 'react-native'
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg'

import { NORMALIZED_WIDTH } from '../types'

interface SliderProps {
  offset: number
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    top: 55,
  },
})

export const Slider: React.FC<SliderProps> = ({ offset }) => {
  return (
    <View style={styles.container}>
      <Svg
        width={NORMALIZED_WIDTH}
        height="11"
        viewBox={`0 0 ${NORMALIZED_WIDTH + 3} 11`}
        fill="none">
        <Rect
          x="1"
          y="1"
          width={`${NORMALIZED_WIDTH}`}
          height="9"
          rx="4.5"
          fill="url(#paint0_linear)"
          stroke="white"
          strokeWidth="2"
          strokeLinejoin="bevel"
        />
        <Defs>
          <LinearGradient
            id="paint0_linear"
            x1="0"
            y1="6.00015"
            x2={`${NORMALIZED_WIDTH}`}
            y2="6.00023"
            gradientUnits="userSpaceOnUse">
            <Stop offset={offset} stopColor="#295672" />
            <Stop offset={offset} stopColor="#ED6464" />
          </LinearGradient>
        </Defs>
      </Svg>
    </View>
  )
}
