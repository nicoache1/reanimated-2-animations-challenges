import React from 'react'
import { Dimensions } from 'react-native'
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated'
import DayWaterSVG from 'src/assets/images/dayWater.svg'
import NightWaterSVG from 'src/assets/images/dayWater.svg'

interface WaterProps {
  accelerometer: any
  waterHeight: number
}

const { width } = Dimensions.get('window')

export const Water: React.FC<WaterProps> = ({ waterHeight, accelerometer }) => {
  const dayWater = useAnimatedStyle(() => {
    const yaw = Math.abs(accelerometer.sensor.value.y)

    return {
      bottom: 0,
      opacity: interpolate(yaw * 100, [20, 60], [1, 0], Extrapolate.CLAMP),
      position: 'absolute',
      zIndex: interpolate(yaw * 100, [20, 60], [11, 10], Extrapolate.CLAMP),
    }
  })

  const nightWater = useAnimatedStyle(() => {
    const yaw = Math.abs(accelerometer.sensor.value.y)

    return {
      bottom: 0,
      opacity: interpolate(yaw * 100, [20, 60], [0, 1], Extrapolate.CLAMP),
      position: 'absolute',
      zIndex: interpolate(yaw * 100, [20, 60], [10, 11], Extrapolate.CLAMP),
    }
  })

  return (
    <>
      <Animated.View style={dayWater}>
        <DayWaterSVG
          height={waterHeight}
          width={width}
          preserveAspectRatio="xMinYMin slice"
        />
      </Animated.View>
      <Animated.View style={nightWater}>
        <NightWaterSVG
          height={waterHeight}
          width={width}
          preserveAspectRatio="xMinYMin slice"
        />
      </Animated.View>
    </>
  )
}
