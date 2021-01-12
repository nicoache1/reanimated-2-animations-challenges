import React from 'react'
import { StyleSheet, View } from 'react-native'
import Svg, { Circle, Line, Rect } from 'react-native-svg'

interface BackgroundProps {}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
})

export const Background: React.FC<BackgroundProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Svg width="414" height="896" viewBox="0 0 414 896" fill="none">
        <Rect width="414" height="896" fill="#759E50" />
        <Rect y="61" width="414" height="61" fill="#89C15E" />
        <Rect y="183" width="414" height="61" fill="#89C15E" />
        <Rect y="427" width="414" height="61" fill="#89C15E" />
        <Rect y="549" width="414" height="61" fill="#89C15E" />
        <Rect y="671" width="414" height="61" fill="#89C15E" />
        <Rect y="793" width="414" height="61" fill="#89C15E" />
        <Rect y="305" width="414" height="61" fill="#89C15E" />
        <Line
          x1="0.0100501"
          y1="424"
          x2="414.01"
          y2="426.08"
          stroke="white"
          strokeWidth="4"
        />
        <Circle cx="207" cy="427" r="58.5" stroke="white" strokeWidth="5" />
        <Circle cx="207.5" cy="424.5" r="7.5" fill="white" />
      </Svg>
    </View>
  )
}
