import { useCallback } from 'react'
import Animated, {
  Easing,
  runOnJS,
  withDelay,
  withTiming,
} from 'react-native-reanimated'
import { ScreenNavigationProp } from 'src/types/react-navigation'

export const useOnPressBack = (
  progress: Animated.SharedValue<number>,
  headerProgress: Animated.SharedValue<number>,
  sizeProgress: Animated.SharedValue<number>,
  descriptionProgress: Animated.SharedValue<number>,
  materialProgress: Animated.SharedValue<number>,
  priceProgress: Animated.SharedValue<number>,
  buttonProgress: Animated.SharedValue<number>,
  navigation: ScreenNavigationProp<any, any>,
) => {
  const onPress = useCallback(() => {
    progress.value = withDelay(
      600,
      withTiming(
        0,
        {
          duration: 400,
          easing: Easing.inOut(Easing.ease),
        },
        (isFinished: boolean) => {
          if (isFinished) {
            runOnJS(navigation.goBack)()
          }
        },
      ),
    )
    headerProgress.value = 0
    descriptionProgress.value = 0
    sizeProgress.value = 0
    materialProgress.value = 0
    priceProgress.value = 0
    buttonProgress.value = 0
  }, [
    buttonProgress,
    descriptionProgress,
    headerProgress,
    materialProgress,
    navigation,
    priceProgress,
    progress,
    sizeProgress,
  ])

  return {
    onPress,
  }
}
