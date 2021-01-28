import React from 'react'
import { Dimensions, Text, View } from 'react-native'
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg'

import { styles } from './styles'

interface SongTrackProps {}

const { width } = Dimensions.get('window')

export const SongTrack: React.FC<SongTrackProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Svg
        width={width - 40}
        height="5"
        viewBox={`0 0 ${width - 40} 5`}
        fill="none">
        <Rect
          x="1"
          y="1"
          width={`${width}`}
          height="9"
          rx="4.5"
          fill="url(#paint0_linear)"
          stroke="white"
          strokeWidth="1"
          strokeLinejoin="bevel"
        />
        <Defs>
          <LinearGradient
            id="paint0_linear"
            x1="0"
            y1="6.00015"
            x2={`${width}`}
            y2="6.00023"
            gradientUnits="userSpaceOnUse">
            <Stop offset={0.342} stopColor="#ED6464" />
            <Stop offset={0.342} stopColor="gray" />
          </LinearGradient>
        </Defs>
      </Svg>
      <View style={[styles.track, styles.shadow]} />
      <View style={styles.timeContainer}>
        <Text style={styles.text}>01:32</Text>
        <Text style={styles.text}>03:47</Text>
      </View>
    </View>
  )
}
