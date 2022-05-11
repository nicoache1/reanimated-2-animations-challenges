import { Dimensions } from 'react-native'
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated'

const { height, width } = Dimensions.get('window')

export const useCrestAnimation = (progress: Animated.SharedValue<number>) => {
  const animatedCrest = useAnimatedStyle(() => {
    const rotate = interpolate(
      progress.value,
      [0, 1],
      [0, -90],
      Extrapolate.CLAMP,
    )
    return {
      transform: [
        {
          scale: interpolate(
            progress.value,
            [0, 1],
            [1, 1.5],
            Extrapolate.CLAMP,
          ),
        },
        {
          translateX: interpolate(
            progress.value,
            [0, 1],
            [0, -width / 10],
            Extrapolate.CLAMP,
          ),
        },
        {
          translateY: interpolate(
            progress.value,
            [0, 1],
            [0, -height / 20],
            Extrapolate.CLAMP,
          ),
        },
        {
          rotate: `${rotate}deg`,
        },
      ],
    }
  })
  return {
    animatedCrest,
  }
}
