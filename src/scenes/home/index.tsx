import React, { useCallback } from 'react'
import { StatusBar, View } from 'react-native'
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler'
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated'
import { clamp, snapPoint } from 'react-native-redash'
import { Routes } from 'src/navigation/Routes'

import { examples } from './examples'
import { Item } from './Item'
import { MAX_HEIGHT } from './Item/types'
import { styles } from './styles'

const snapPoints = examples.map((_, index) => index * -MAX_HEIGHT)

export const Home: React.FC<{}> = ({ navigation }: any) => {
  const onPress = useCallback(
    (route: Routes) => () => {
      navigation.push(route)
    },
    [navigation],
  )

  const translateY = useSharedValue<number>(0)

  const gestureHandler = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    { offsetY: number }
  >({
    onActive: ({ translationY }, context) => {
      translateY.value = clamp(
        translationY + context.offsetY,
        -(examples.length - 1) * MAX_HEIGHT,
        0,
      )
    },
    onEnd: ({ velocityY }) => {
      const destination = snapPoint(translateY.value, velocityY, snapPoints)
      translateY.value = withSpring(destination, {
        overshootClamping: true,
        velocity: velocityY,
      })
    },
    onStart: (_event, context) => {
      context.offsetY = translateY.value
    },
  })

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View>
          {examples.map((item, index) => (
            <Item
              item={item}
              key={index}
              index={index}
              offsetY={translateY}
              onPress={onPress(item.route)}
            />
          ))}
        </Animated.View>
      </PanGestureHandler>
    </View>
  )
}
