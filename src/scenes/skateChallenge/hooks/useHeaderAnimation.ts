import Animated, {
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated'

export const useHeaderAnimation = (
  headerProgress: Animated.SharedValue<number>,
) => {
  const animatedHeaderTitle = useAnimatedStyle(() => ({
    opacity: interpolate(headerProgress.value, [0, 1], [0, 1]),
    transform: [
      { translateX: interpolate(headerProgress.value, [0, 1], [100, 0]) },
    ],
  }))

  const animatedHeaderLeft = useAnimatedStyle(() => ({
    opacity: interpolate(headerProgress.value, [0, 1], [0, 1]),
    transform: [
      { translateY: interpolate(headerProgress.value, [0, 1], [-100, 0]) },
    ],
  }))

  return {
    animatedHeaderLeft,
    animatedHeaderTitle,
  }
}
