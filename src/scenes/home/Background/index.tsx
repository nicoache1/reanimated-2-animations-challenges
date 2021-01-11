import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import Svg, { Defs, RadialGradient, Rect, Stop } from 'react-native-svg'

interface BackgroundProps {}

const { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
})

export const Background: React.FC<BackgroundProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Svg width={width} height={height} viewBox="0 0 375 812" fill="none">
        <Rect width={width} height={height} fill="url(#paint0_radial)" />
        <Defs>
          <RadialGradient
            id="paint0_radial"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(126.5 261.5) rotate(89.8439) scale(550.502 167.343)">
            <Stop stopColor="#474787" />
            <Stop offset="1" stopColor="#706FD3" />
          </RadialGradient>
        </Defs>
      </Svg>
    </View>
  )
}
