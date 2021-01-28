import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated'

import { ITEM_HEIGHT, MARGIN_VERTICAL } from '../constants'

interface OuterParams {
  itemNumber: number
  offsetY: Animated.SharedValue<number>
}

export const useAnimatedAlbum = (
  itemNumber: OuterParams['itemNumber'],
  offsetY: OuterParams['offsetY'],
) => {
  const animatedAlbum = useAnimatedStyle(() => {
    const inputRange = [
      (ITEM_HEIGHT + MARGIN_VERTICAL * 2) * itemNumber,
      (ITEM_HEIGHT + MARGIN_VERTICAL * 2) * itemNumber + 5,
    ]

    return {
      height: interpolate(
        offsetY.value,
        inputRange,
        [80, 70],
        Extrapolate.CLAMP,
      ),
      left: interpolate(offsetY.value, inputRange, [20, 50], Extrapolate.CLAMP),
      top: interpolate(offsetY.value, inputRange, [-6, 6], Extrapolate.CLAMP),
      width: interpolate(
        offsetY.value,
        inputRange,
        [80, 70],
        Extrapolate.CLAMP,
      ),
    }
  })

  return {
    animatedAlbum,
  }
}
