import React from 'react'
import { StyleSheet, View } from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated'
import { getYForX, Vector } from 'react-native-redash'

import { graphs } from '../Graph/graphsData'
import { CURSOR, styles } from './styles'

interface CursorProps {
  index: Animated.SharedValue<number>
  translation: Vector<Animated.SharedValue<number>>
}

export const Cursor: React.FC<CursorProps> = ({ translation, index }) => {
  const isActive = useSharedValue(false)
  const onGestureEvent = useAnimatedGestureHandler({
    onActive: (event) => {
      translation.x.value = event.x
      translation.y.value = getYForX(
        graphs[index.value].data.path,
        translation.x.value,
      )
    },
    onEnd: () => {
      isActive.value = false
    },
    onStart: () => {
      isActive.value = true
    },
  })

  const style = useAnimatedStyle(() => {
    const translateX = translation.x.value - CURSOR / 2
    const translateY = translation.y.value - CURSOR / 2
    return {
      transform: [
        { translateX },
        { translateY },
        { scale: withSpring(isActive.value ? 1 : 0) },
      ],
    }
  })

  return (
    <View style={StyleSheet.absoluteFill}>
      <PanGestureHandler {...{ onGestureEvent }}>
        <Animated.View style={StyleSheet.absoluteFill}>
          <Animated.View style={[styles.cursor, style]}>
            <View style={styles.cursorBody} />
          </Animated.View>
        </Animated.View>
      </PanGestureHandler>
    </View>
  )
}
