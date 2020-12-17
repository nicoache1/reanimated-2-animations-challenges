import React from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedProps,
  useAnimatedStyle,
} from 'react-native-reanimated'
import { SafeAreaView } from 'react-native-safe-area-context'
import Svg, { Path, Rect } from 'react-native-svg'

import { styles } from './styles'

interface LayoutProps {
  backgroundColor: StyleProp<ViewStyle>
  offsetY: Animated.SharedValue<number>
  onPressGoBack: () => void
}

const AnimatedRect = Animated.createAnimatedComponent(Rect)
const AnimatedPath = Animated.createAnimatedComponent(Path)
const AnimatedSafeAreaView = Animated.createAnimatedComponent(SafeAreaView)

export const Header: React.FC<LayoutProps> = ({
  backgroundColor,
  offsetY,
  onPressGoBack,
}) => {
  const animatedHeader = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(
          offsetY.value,
          [0, 80],
          [-200, 0],
          Extrapolate.CLAMP,
        ),
      },
    ],
  }))

  const animatedStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      offsetY.value,
      [0, 80],
      ['rgb(20, 38, 100)', 'rgb(255, 255, 255)'],
    ) as string,
  }))

  const animatedPathProps = useAnimatedProps(() => ({
    fill: interpolateColor(
      offsetY.value,
      [0, 80],
      ['rgb(255, 255, 255)', 'rgb(0, 0, 0)'],
    ) as string,
  }))

  const animatedRectProps = useAnimatedProps(() => ({
    stroke: interpolateColor(
      offsetY.value,
      [0, 80],
      ['rgb(255, 255, 255)', 'rgb(0, 0, 0)'],
    ) as string,
  }))

  const animatedRectProps2 = useAnimatedProps(() => ({
    stroke: interpolateColor(
      offsetY.value,
      [0, 80],
      ['rgb(255, 255, 255)', 'rgb(0, 0, 0)'],
    ) as string,
  }))

  const animatedRectProps3 = useAnimatedProps(() => ({
    stroke: interpolateColor(
      offsetY.value,
      [0, 80],
      ['rgb(255, 255, 255)', 'rgb(0, 0, 0)'],
    ) as string,
  }))

  const animatedRectProps4 = useAnimatedProps(() => ({
    stroke: interpolateColor(
      offsetY.value,
      [0, 80],
      ['rgb(255, 255, 255)', 'rgb(0, 0, 0)'],
    ) as string,
  }))

  return (
    <AnimatedSafeAreaView style={animatedStyle} edges={['top']}>
      <View style={[styles.container, backgroundColor]}>
        <Animated.View style={[styles.backgroundAnimated, animatedHeader]} />
        <Animated.View style={styles.headerLeft}>
          <TouchableWithoutFeedback
            onPress={onPressGoBack}
            hitSlop={{
              bottom: 15,
              left: 15,
              right: 15,
              top: 15,
            }}>
            <Svg width="23" height="16" viewBox="0 0 23 16" fill="none">
              <AnimatedPath
                d="M6.82564 0L0 7.58154L6.82564 15.1631L9.16102 13.1549L7.58154 11.44C6.67897 10.4359 5.83282 9.65744 4.90769 9.03692H22.4062V6.12615H4.87385C5.83282 5.5282 6.64513 4.72718 7.58154 3.72308L9.16102 2.00821L6.82564 0Z"
                animatedProps={animatedPathProps}
              />
            </Svg>
          </TouchableWithoutFeedback>
        </Animated.View>
        <Animated.View style={styles.headerRight}>
          <Svg width="29" height="29" viewBox="0 0 29 29" fill="none">
            <AnimatedRect
              x="1.5"
              y="1.5"
              width="10.05"
              height="10.05"
              rx="5.025"
              strokeWidth="3"
              strokeLinejoin="round"
              animatedProps={animatedRectProps}
            />
            <AnimatedRect
              x="1.5"
              y="17.45"
              width="10.05"
              height="10.05"
              rx="5.025"
              animatedProps={animatedRectProps2}
              strokeWidth="3"
              strokeLinejoin="round"
            />
            <AnimatedRect
              x="17.45"
              y="1.5"
              width="10.05"
              height="10.05"
              rx="5.025"
              animatedProps={animatedRectProps3}
              strokeWidth="3"
              strokeLinejoin="round"
            />
            <AnimatedRect
              x="17.45"
              y="17.45"
              width="10.05"
              height="10.05"
              rx="5.025"
              animatedProps={animatedRectProps4}
              strokeWidth="3"
              strokeLinejoin="round"
            />
          </Svg>
        </Animated.View>
      </View>
    </AnimatedSafeAreaView>
  )
}
