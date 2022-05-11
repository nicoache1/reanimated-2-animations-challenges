import { useEffect } from 'react'
import {
  Easing,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated'

export const useHandleAnimations = () => {
  const progress = useSharedValue(0)
  const headerProgress = useSharedValue(0)
  const descriptionProgress = useSharedValue(0)
  const sizeProgress = useSharedValue(0)
  const materialProgress = useSharedValue(0)
  const priceProgress = useSharedValue(0)
  const buttonProgress = useSharedValue(0)

  useEffect(() => {
    progress.value = withDelay(
      600,
      withTiming(1, {
        duration: 400,
        easing: Easing.inOut(Easing.ease),
      }),
    )
    headerProgress.value = withDelay(
      1000,
      withTiming(1, {
        duration: 400,
        easing: Easing.inOut(Easing.ease),
      }),
    )
    descriptionProgress.value = withDelay(
      1100,
      withTiming(1, {
        duration: 400,
        easing: Easing.inOut(Easing.ease),
      }),
    )
    sizeProgress.value = withDelay(
      1200,
      withTiming(1, {
        duration: 400,
        easing: Easing.inOut(Easing.ease),
      }),
    )
    materialProgress.value = withDelay(
      1300,
      withTiming(1, {
        duration: 400,
        easing: Easing.inOut(Easing.ease),
      }),
    )
    priceProgress.value = withDelay(
      1400,
      withTiming(1, {
        duration: 400,
        easing: Easing.inOut(Easing.ease),
      }),
    )
    buttonProgress.value = withDelay(
      1500,
      withTiming(1, {
        duration: 400,
        easing: Easing.inOut(Easing.ease),
      }),
    )
  })

  return {
    buttonProgress,
    descriptionProgress,
    headerProgress,
    materialProgress,
    priceProgress,
    progress,
    sizeProgress,
  }
}
