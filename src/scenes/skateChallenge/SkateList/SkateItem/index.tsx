import React from 'react'
import { Text, View } from 'react-native'
import {
  TapGestureHandler,
  TapGestureHandlerGestureEvent,
} from 'react-native-gesture-handler'
import Animated, {
  interpolate,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
} from 'react-native-reanimated'
import { SharedElement } from 'react-navigation-shared-element'
import { ItemSelected, Skate } from 'src/scenes/skateChallenge/types'

import { styles } from './styles'

interface LayoutProps {
  skate: Skate
  onPress: (position: ItemSelected['position']) => void
  scrollAnimation: Animated.SharedValue<number>
}

export const SkateItem: React.FC<LayoutProps> = ({
  skate,
  onPress,
  scrollAnimation,
}) => {
  const tapGestureEvent = useAnimatedGestureHandler<
    TapGestureHandlerGestureEvent,
    any
  >(
    {
      onActive: ({ absoluteX: x, absoluteY: y }) => {
        runOnJS(onPress)({ x, y })
      },
    },
    [onPress],
  )

  const crestStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scaleY: interpolate(scrollAnimation.value, [0, 1], [1, 0.7]),
      },
    ],
  }))

  return (
    <TapGestureHandler onGestureEvent={tapGestureEvent}>
      <Animated.View>
        <View
          style={[
            styles.container,
            { backgroundColor: skate.backgroundColor },
          ]}>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{skate.name}</Text>
          </View>
          <SharedElement id={skate.id} style={styles.crestContainer}>
            <Animated.View style={[styles.crestContainer, crestStyle]}>
              <View style={styles.crestShadow}>{skate.crest}</View>
            </Animated.View>
          </SharedElement>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>{`${skate.price}$`}</Text>
          </View>
        </View>
      </Animated.View>
    </TapGestureHandler>
  )
}
