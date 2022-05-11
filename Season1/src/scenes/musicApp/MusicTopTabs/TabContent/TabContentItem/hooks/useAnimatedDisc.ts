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

export const useAnimatedDisc = (
  itemNumber: OuterParams['itemNumber'],
  offsetY: OuterParams['offsetY'],
) => {
  const animatedDisc = useAnimatedStyle(() => {
    const inputRange = [
      (ITEM_HEIGHT + MARGIN_VERTICAL * 2) * itemNumber,
      (ITEM_HEIGHT + MARGIN_VERTICAL * 2) * itemNumber + 5,
    ]

    return {
      opacity: interpolate(
        offsetY.value,
        inputRange,
        [1, 0],
        Extrapolate.CLAMP,
      ),
    }
  })

  return {
    animatedDisc,
  }
}
