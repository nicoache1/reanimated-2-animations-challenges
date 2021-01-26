import React from 'react'
import { Image } from 'react-native'
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  TapGestureHandler,
  TapGestureHandlerGestureEvent,
} from 'react-native-gesture-handler'
import Animated, {
  interpolate,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import { SharedElement } from 'react-navigation-shared-element'

import { ExpandingItem } from '../types'
import { Footer } from './Footer'
import { styles } from './styles'

interface ItemProps {
  index: number
  item: ExpandingItem
  translateX: Animated.SharedValue<number>
  setSelectedItem: React.Dispatch<React.SetStateAction<number | undefined>>
  selected: boolean
}

export const Item: React.FC<ItemProps> = ({ index, item, setSelectedItem }) => {
  const progress = useSharedValue<number>(0)

  const tapGestureEvent = useAnimatedGestureHandler<
    TapGestureHandlerGestureEvent,
    any
  >({
    onEnd: () => {
      progress.value = withTiming(progress.value === 0 ? 1 : 0, {}, () => {
        runOnJS(setSelectedItem)(index)
      })
    },
  })

  const gestureHandler = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    any
  >({
    onStart: (_event) => {
      progress.value = withTiming(0)
    },
  })

  const animatedImage = useAnimatedStyle(() => ({
    transform: [{ translateY: interpolate(progress.value, [0, 1], [0, -60]) }],
    zIndex: 1,
  }))

  return (
    <Animated.View key={`${index}`} style={[styles.container]}>
      <PanGestureHandler
        onGestureEvent={gestureHandler}
        activeOffsetY={[-10, 10]}>
        <Animated.View>
          <TapGestureHandler onGestureEvent={tapGestureEvent}>
            <Animated.View>
              <Animated.View style={[animatedImage, styles.imageContainer]}>
                <SharedElement id={item.id}>
                  <Image
                    style={styles.image}
                    source={item.image}
                    resizeMode={'cover'}
                  />
                </SharedElement>
              </Animated.View>
              <Footer item={item} progress={progress} />
            </Animated.View>
          </TapGestureHandler>
        </Animated.View>
      </PanGestureHandler>
    </Animated.View>
  )
}
