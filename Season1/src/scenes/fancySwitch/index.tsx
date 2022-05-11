import React from 'react'
import { View } from 'react-native'
import {
  TapGestureHandler,
  TapGestureHandlerGestureEvent,
} from 'react-native-gesture-handler'
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedGestureHandler,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import Svg, { Path } from 'react-native-svg'

import { styles } from './styles'

interface FancySwitchProps {}

const SWITCH_SIZE = 46

const AnimatedPath = Animated.createAnimatedComponent<any, any>(Path)

export const FancySwitch: React.FC<FancySwitchProps> = ({}) => {
  const translateX = useSharedValue<number>(0)

  const tapGestureEvent = useAnimatedGestureHandler<
    TapGestureHandlerGestureEvent,
    any
  >({
    onFinish: () => {
      translateX.value = withTiming(
        translateX.value === 0 ? 100 - SWITCH_SIZE : 0,
      )
    },
  })

  const animatedStyle = useAnimatedStyle(() => ({
    borderRadius: SWITCH_SIZE / 2,
    height: SWITCH_SIZE,
    transform: [{ translateX: translateX.value }],
    width: SWITCH_SIZE,
  }))

  const animatedCircleStyle = useAnimatedStyle(() => {
    const value = interpolate(
      translateX.value,
      [0, 100 - SWITCH_SIZE],
      [0, 360],
      Extrapolate.CLAMP,
    )
    return {
      transform: [{ rotateZ: `${value}deg` }],
    }
  })

  const animatedBackground = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      translateX.value,
      [0, 100 - SWITCH_SIZE],
      ['rgb(27,72,85)', 'rgb(163,74,61)'],
    ) as string,
  }))

  const tickProps = useAnimatedProps(() => {
    return {
      opacity: interpolate(translateX.value, [0, 100 - SWITCH_SIZE], [1, 0]),
    }
  })

  const crossProps = useAnimatedProps(() => {
    return {
      opacity: interpolate(translateX.value, [0, 100 - SWITCH_SIZE], [0, 1]),
    }
  })

  return (
    <View style={styles.container}>
      <TapGestureHandler
        onGestureEvent={tapGestureEvent}
        minPointers={1}
        maxDurationMs={10}>
        <Animated.View>
          <Animated.View style={[styles.track, animatedBackground]} />
          <Animated.View style={[styles.pointer, animatedStyle]}>
            <Animated.View style={animatedCircleStyle}>
              <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <AnimatedPath
                  d="M1 8.42105C6.5 14.3158 9.25 17.2632 9.9375 18L23 4"
                  stroke="rgb(27,72,85)"
                  strokeWidth={4}
                  animatedProps={tickProps}
                />
                <AnimatedPath
                  d="M21 3C9 15 4 20 3 21M3 3C13.1905 13.1714 19.246 19.2381 21 21"
                  stroke="rgb(163,74,61)"
                  strokeWidth={4}
                  animatedProps={crossProps}
                />
              </Svg>
            </Animated.View>
          </Animated.View>
        </Animated.View>
      </TapGestureHandler>
    </View>
  )
}
