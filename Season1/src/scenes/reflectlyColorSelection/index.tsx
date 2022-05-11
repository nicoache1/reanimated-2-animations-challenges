import { useHeaderHeight } from '@react-navigation/stack'
import React, {
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler'
import Animated, {
  Easing,
  Extrapolate,
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated'
import { snapPoint } from 'react-native-redash'
import { isEmulator, isSimulator } from 'src/common/deviceHelpers'

import { Background } from './Background'
import { BackgroundGL } from './BackgroundGL'
import { ColorItem } from './ColorItem'
import { colors } from './colors'
import { ColorSelectionState } from './types'

const { width, height } = Dimensions.get('window')
const COLOR_WIDTH = width / 3
const RADIUS = 45

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  placeholder: {
    width: COLOR_WIDTH,
  },
})

export const ReflectlyColorSelection: React.FC<{}> = () => {
  const [colorSelection, setColorSelection] = useState<ColorSelectionState>({
    current: colors[0],
    position: { x: 0, y: 0 },
    previous: colors[0],
  })

  const translateX = useSharedValue(0)
  const snapPoints = useMemo(
    () => colors.map((_, index) => -index * COLOR_WIDTH),
    [],
  )

  // Color selection

  const onPress = useCallback(
    (position, index) => {
      translateX.value = withSpring(-index * COLOR_WIDTH)
      setColorSelection({
        current: colors[index],
        position,
        previous: colorSelection.current,
      })
    },
    [colorSelection, translateX],
  )

  // Background animation
  const progress = useSharedValue(0)

  useEffect(() => {
    progress.value = 0
    progress.value = withTiming(1, {
      duration: 650,
      easing: Easing.inOut(Easing.ease),
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colorSelection])

  const headerHeight = useHeaderHeight()

  const MAX_RADIUS =
    Math.SQRT2 *
    (Math.max(
      width + colorSelection.position.x,
      height + colorSelection.position.y,
    ) /
      2)

  const animatedBackgroundStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: colorSelection.current.start,
      borderRadius: RADIUS,
      height: RADIUS * 2,
      left: -RADIUS + colorSelection.position.x,
      top: -RADIUS + colorSelection.position.y - headerHeight,
      transform: [{ scale: progress.value * (MAX_RADIUS / RADIUS) }],
      width: RADIUS * 2,
    }
  }, [colorSelection])

  // Synusoid effect
  const useSynusoidAnimatedStyle = (index: number) =>
    useAnimatedStyle(() => {
      const inputRange = [
        -COLOR_WIDTH * (index + 1),
        -COLOR_WIDTH * index,
        -COLOR_WIDTH * (index - 1),
      ]

      const angle = interpolate(
        translateX.value,
        inputRange,
        [0, Math.PI / 2, Math.PI],
        Extrapolate.CLAMP,
      )

      const translateY = 70 * Math.cos(angle)
      const scale = 0.8 + 0.2 * Math.sin(angle)
      return {
        transform: [{ translateY }, { scale }],
      }
    })

  // "Translation Animation"
  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    {
      offsetX: number
    }
  >({
    onActive: (event, context: any) => {
      translateX.value = context.offsetX + event.translationX
    },
    onEnd: ({ velocityX }) => {
      const destination = snapPoint(translateX.value, velocityX, snapPoints)
      translateX.value = withSpring(destination)
    },
    onStart: (event, context: any) => {
      context.offsetX = translateX.value
    },
  })

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }))

  const useCommonBackground = useMemo(() => isSimulator() || isEmulator(), [])
  return (
    <Fragment>
      {useCommonBackground ? (
        <Background
          animatedBackgroundStyle={animatedBackgroundStyle}
          colorSelection={colorSelection}
        />
      ) : (
        <BackgroundGL colorSelection={colorSelection} />
      )}

      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View style={[styles.container, animatedStyle]}>
          <View style={styles.placeholder} />
          {colors.map((color, index) => (
            <ColorItem
              color={color}
              key={index}
              index={index}
              colorWidth={COLOR_WIDTH}
              radius={RADIUS}
              onPress={onPress}
              synusoid={useSynusoidAnimatedStyle}
            />
          ))}
        </Animated.View>
      </PanGestureHandler>
    </Fragment>
  )
}
