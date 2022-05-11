import React from 'react'
import { Dimensions } from 'react-native'
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated'
import YatchSVG from 'src/assets/images/yatch.svg'

interface BoatProps {
  accelerometer: any
  waterHeight: number
}

const { width } = Dimensions.get('window')

export const Boat: React.FC<BoatProps> = ({ waterHeight, accelerometer }) => {
  const boatStyle = useAnimatedStyle(() => {
    const yaw = Math.abs(accelerometer.sensor.value.y)

    return {
      bottom: waterHeight / 4,
      left: width / 3,
      position: 'absolute',
      transform: [
        {
          translateX: interpolate(
            yaw * 100,
            [20, 60],
            [0, -width],
            Extrapolate.CLAMP,
          ),
        },
      ],
      zIndex: 12,
    }
  })

  return (
    <Animated.View style={boatStyle}>
      <YatchSVG />
    </Animated.View>
  )
}
