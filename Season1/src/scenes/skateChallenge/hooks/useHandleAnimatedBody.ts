import { Dimensions } from 'react-native'
import Animated, {
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated'

const { height } = Dimensions.get('window')

export const useHandleAnimatedBody = (
  descriptionProgress: Animated.SharedValue<number>,
  sizeProgress: Animated.SharedValue<number>,
  materialProgress: Animated.SharedValue<number>,
  priceProgress: Animated.SharedValue<number>,
  buttonProgress: Animated.SharedValue<number>,
) => {
  const animatedDescription = useAnimatedStyle(() => ({
    opacity: interpolate(descriptionProgress.value, [0, 1], [0, 1]),
    transform: [
      { translateX: interpolate(descriptionProgress.value, [0, 1], [100, 0]) },
    ],
  }))

  const animatedSeparator = useAnimatedStyle(() => ({
    opacity: interpolate(descriptionProgress.value, [0, 1], [0, 1]),
    transform: [
      { translateX: interpolate(descriptionProgress.value, [0, 1], [100, 0]) },
    ],
  }))

  const animatedSize = useAnimatedStyle(() => ({
    opacity: interpolate(sizeProgress.value, [0, 1], [0, 1]),
    transform: [
      { translateX: interpolate(sizeProgress.value, [0, 1], [100, 0]) },
    ],
  }))

  const animatedMaterial = useAnimatedStyle(() => ({
    opacity: interpolate(materialProgress.value, [0, 1], [0, 1]),
    transform: [
      { translateX: interpolate(materialProgress.value, [0, 1], [100, 0]) },
    ],
  }))

  const animatedPrice = useAnimatedStyle(() => ({
    opacity: interpolate(priceProgress.value, [0, 1], [0, 1]),
    transform: [
      { translateX: interpolate(priceProgress.value, [0, 1], [100, 0]) },
    ],
  }))

  const animatedButton = useAnimatedStyle(() => ({
    opacity: interpolate(buttonProgress.value, [0, 1], [0, 1]),
    transform: [
      {
        translateY: interpolate(
          buttonProgress.value,
          [0, 1],
          [height + 300, 0],
        ),
      },
    ],
  }))

  return {
    animatedButton,
    animatedDescription,
    animatedMaterial,
    animatedPrice,
    animatedSeparator,
    animatedSize,
  }
}
