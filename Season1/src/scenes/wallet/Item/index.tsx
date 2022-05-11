import React from 'react'
import { Dimensions, Image, StyleSheet } from 'react-native'
import {
  TapGestureHandler,
  TapGestureHandlerGestureEvent,
} from 'react-native-gesture-handler'
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
} from 'react-native-reanimated'
import { SharedElement } from 'react-navigation-shared-element'

import { CARD_SIZE, WalletItem } from '../types'

interface ItemProps {
  onPress: (card: number) => void
  card: WalletItem
  index: number
  cardSharedValue: Animated.SharedValue<number>
}

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    top: 0,
    zIndex: 1,
  },
  image: {
    height: CARD_SIZE,
    width: width - 40,
  },
})

export const Item: React.FC<ItemProps> = ({
  onPress,
  card,
  index,
  cardSharedValue,
}) => {
  const cardAnimatedStyle = useAnimatedStyle(() => ({
    top: CARD_SIZE * index,
    transform: [
      {
        translateY: interpolate(
          cardSharedValue.value,
          [0, 1, 2],
          [0, -(CARD_SIZE - 100) * index, -CARD_SIZE * index],
          Extrapolate.CLAMP,
        ),
      },
    ],
    zIndex: index + 1,
  }))

  const tapGestureEvent = useAnimatedGestureHandler<
    TapGestureHandlerGestureEvent,
    any
  >({
    onActive: () => {
      runOnJS(onPress)(index)
    },
  })

  return (
    <TapGestureHandler onGestureEvent={tapGestureEvent}>
      <Animated.View
        style={[styles.container, cardAnimatedStyle, { zIndex: index + 1 }]}>
        <SharedElement id={card.id}>
          <Image
            style={{
              height: CARD_SIZE,
              width: width - 40,
            }}
            source={card.image}
            resizeMode={'contain'}
          />
        </SharedElement>
      </Animated.View>
    </TapGestureHandler>
  )
}
