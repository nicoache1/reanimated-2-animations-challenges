import React, { useCallback } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler'
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import { clamp, snapPoint } from 'react-native-redash'
import Home from 'src/assets/images/customTabBar/home.svg'
import Search from 'src/assets/images/customTabBar/search.svg'
import Library from 'src/assets/images/spotifyPlayer/Library.svg'

import { MiniPlayer } from '../MiniPlayer'
import { Player } from '../Player'
import { PlayerOverlay } from '../PlayerOverlay'
import { TabIcon } from '../TabIcon'
import { SNAP_BOTTOM, SNAP_TOP, TABBAR_HEIGHT } from '../types'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#272829',
    borderTopColor: 'black',
    borderWidth: 1,
    bottom: 0,
    flexDirection: 'row',
    height: TABBAR_HEIGHT,
    left: 0,
    position: 'absolute',
    right: 0,
  },
  playerSheet: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'cyan',
  },
})

export const BottomTab: React.FC<{}> = () => {
  const translateY = useSharedValue(SNAP_BOTTOM)
  const snapPoints = [SNAP_TOP, SNAP_BOTTOM]

  const gestureHandler = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    any
  >({
    onActive: ({ translationY }, context) => {
      translateY.value = clamp(
        context.offsetY + translationY,
        SNAP_TOP,
        SNAP_BOTTOM,
      )
    },
    onEnd: ({ velocityY }) => {
      const destination = snapPoint(translateY.value, velocityY, snapPoints)
      translateY.value = withTiming(destination)
    },
    onStart: (_event, context: any) => {
      context.offsetY = translateY.value
    },
  })

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }))

  const animatedBottomBarStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(
          translateY.value,
          [SNAP_BOTTOM - TABBAR_HEIGHT, SNAP_BOTTOM],
          [TABBAR_HEIGHT, 0],
          Extrapolate.CLAMP,
        ),
      },
    ],
  }))

  const goUp = useCallback(() => {
    translateY.value = withTiming(SNAP_TOP)
  }, [translateY])

  const goDown = useCallback(() => {
    translateY.value = withTiming(SNAP_BOTTOM)
  }, [translateY])

  return (
    <>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={[styles.playerSheet, animatedStyle]}>
          <Player onPress={goDown} />
          <PlayerOverlay translateY={translateY} />
          <MiniPlayer onPress={goUp} translateY={translateY} />
        </Animated.View>
      </PanGestureHandler>
      <Animated.View style={animatedBottomBarStyle}>
        <SafeAreaView style={styles.container}>
          <TabIcon label="Home">
            <Home stroke={'white'} />
          </TabIcon>
          <TabIcon label="Search">
            <Search stroke={'white'} />
          </TabIcon>
          <TabIcon label="Library">
            <Library stroke={'white'} />
          </TabIcon>
        </SafeAreaView>
      </Animated.View>
    </>
  )
}
