import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated'
import DayBuildingSVG from 'src/assets/images/dayBuilding.svg'
import DayTheatreSVG from 'src/assets/images/dayTheatre.svg'
import NightBuildingSVG from 'src/assets/images/nightBuilding.svg'
import NightTheatreSVG from 'src/assets/images/nightTheatre.svg'
import TreeSVG from 'src/assets/images/tree.svg'

interface LandProps {
  accelerometer: any
  waterHeight: number
}

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  trees: {
    position: 'absolute',
    zIndex: 30,
  },
})

export const Land: React.FC<LandProps> = ({ accelerometer, waterHeight }) => {
  const sunStyle = useAnimatedStyle(() => {
    const yaw = Math.abs(accelerometer.sensor.value.y)

    return {
      bottom: waterHeight,
      left: width / 4,
      opacity: interpolate(yaw * 100, [20, 60], [1, 0], Extrapolate.CLAMP),
      position: 'absolute',
      zIndex: interpolate(yaw * 100, [20, 60], [51, 50], Extrapolate.CLAMP),
    }
  })

  const nightStyle = useAnimatedStyle(() => {
    const yaw = Math.abs(accelerometer.sensor.value.y)

    return {
      bottom: waterHeight,
      left: width / 4,
      opacity: interpolate(yaw * 100, [20, 60], [0, 1], Extrapolate.CLAMP),
      position: 'absolute',
      zIndex: interpolate(yaw * 100, [20, 60], [50, 51], Extrapolate.CLAMP),
    }
  })

  const theatreSunStyle = useAnimatedStyle(() => {
    const yaw = Math.abs(accelerometer.sensor.value.y)

    return {
      bottom: waterHeight - 50,
      opacity: interpolate(yaw * 100, [20, 60], [1, 0], Extrapolate.CLAMP),
      position: 'absolute',
      right: 0,
      zIndex: interpolate(yaw * 100, [20, 60], [61, 60], Extrapolate.CLAMP),
    }
  })

  const theatreNightStyle = useAnimatedStyle(() => {
    const yaw = Math.abs(accelerometer.sensor.value.y)

    return {
      bottom: waterHeight - 50,
      opacity: interpolate(yaw * 100, [20, 60], [0, 1], Extrapolate.CLAMP),
      position: 'absolute',
      right: 0,
      zIndex: interpolate(yaw * 100, [20, 60], [60, 61], Extrapolate.CLAMP),
    }
  })

  return (
    <>
      <Animated.View style={sunStyle}>
        <DayBuildingSVG />
      </Animated.View>
      <Animated.View style={nightStyle}>
        <NightBuildingSVG />
      </Animated.View>
      <Animated.View style={theatreSunStyle}>
        <DayTheatreSVG />
      </Animated.View>
      <Animated.View style={theatreNightStyle}>
        <NightTheatreSVG />
      </Animated.View>
      <View style={[{ bottom: waterHeight }, styles.trees]}>
        <TreeSVG width={width} preserveAspectRatio="xMinYMin slice" />
      </View>
    </>
  )
}
