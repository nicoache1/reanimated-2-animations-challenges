import { Dimensions } from 'react-native'
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated'

import { angle, perspective, ratio } from '../constants'

interface OuterParams {
  indexColumn: number
  progress: Animated.SharedValue<number>
}

const { width } = Dimensions.get('window')

export const useAnimatedRows = (
  indexColumn: OuterParams['indexColumn'],
  progress: OuterParams['progress'],
) => {
  const animatedStyle = useAnimatedStyle(() => {
    const offset = indexColumn * width
    const inputRange = [offset - width, offset + width]
    const rotateY = interpolate(progress.value, inputRange, [angle, -angle])
    const extra = width / ratio / Math.cos(angle / 2) - width / ratio

    return {
      transform: [
        { perspective },
        {
          translateX: interpolate(
            progress.value,
            inputRange,
            [width / ratio, -width / ratio],
            Extrapolate.CLAMP,
          ),
        },
        {
          rotateY: `${rotateY}rad`,
        },
        {
          translateX: interpolate(
            progress.value,
            inputRange,
            [width, -width],
            Extrapolate.CLAMP,
          ),
        },
        {
          translateX: interpolate(
            progress.value,
            inputRange,
            [-extra, extra],
            Extrapolate.CLAMP,
          ),
        },
      ],
    }
  })

  return {
    animatedStyle,
  }
}
