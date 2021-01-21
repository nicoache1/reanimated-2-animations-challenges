import React, { useCallback, useEffect, useState } from 'react'
import { View } from 'react-native'
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler'
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated'
import { Routes } from 'src/navigation/Routes'
import { ScreenNavigationProp } from 'src/types/react-navigation'

import { FloatingButton } from './FloatingButton'
import { Item } from './Item'
import { styles } from './styles'
import { Cards, WALLET_STATES, WalletItem } from './types'

interface WalletProps {
  navigation: ScreenNavigationProp<any, any>
}

export const Wallet: React.FC<WalletProps> = ({ navigation }) => {
  const [selectedItem, setSelectedItem] = useState<undefined | WalletItem>(
    undefined,
  )
  const card1State = useSharedValue<number>(WALLET_STATES.EXPANDED)
  const card2State = useSharedValue<number>(WALLET_STATES.EXPANDED)
  const card3State = useSharedValue<number>(WALLET_STATES.EXPANDED)
  const floatingButton = useSharedValue<number>(WALLET_STATES.EXPANDED)

  const getNewStateOnPan = (previous: WALLET_STATES) => {
    // eslint-disable-next-line prettier/prettier
    "worklet";
    return previous === WALLET_STATES.EXPANDED
      ? WALLET_STATES.SEMI_COLLAPSED
      : WALLET_STATES.EXPANDED
  }

  const getNewStateOnTouch = (previous: WALLET_STATES) => {
    // eslint-disable-next-line prettier/prettier
    "worklet";
    return previous === WALLET_STATES.COLLAPSED
      ? WALLET_STATES.EXPANDED
      : WALLET_STATES.COLLAPSED
  }

  const gestureHandler = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    any
  >({
    onStart: () => {
      card2State.value = withDelay(
        120,
        withTiming(getNewStateOnPan(card2State.value)),
      )
      card3State.value = withTiming(getNewStateOnPan(card3State.value))

      floatingButton.value = withDelay(
        floatingButton.value === WALLET_STATES.EXPANDED ? 400 : 1,
        withTiming(floatingButton.value === WALLET_STATES.EXPANDED ? 1 : 0),
      )
    },
  })

  useEffect(() => {
    let timeoutRef: any
    if (selectedItem) {
      card2State.value = withTiming(getNewStateOnTouch(card2State.value))
      card3State.value = withTiming(getNewStateOnTouch(card3State.value))
      timeoutRef = setTimeout(() => {
        // restart values in the back :P
        card2State.value = withDelay(500, withTiming(WALLET_STATES.EXPANDED))
        card3State.value = withDelay(500, withTiming(WALLET_STATES.EXPANDED))
        navigation.navigate(Routes.WalletDetail, { wallet: selectedItem })
      }, 300)
    }

    return () => clearTimeout(timeoutRef)
  }, [card2State, card3State, selectedItem, navigation])

  const onPress = useCallback(
    (index) => {
      if (card2State.value === WALLET_STATES.EXPANDED) {
        const cardItem = Cards[index]
        setSelectedItem(cardItem)
      }
    },
    [card2State],
  )

  return (
    <View style={styles.container}>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View>
          <Item
            cardSharedValue={card1State}
            index={0}
            card={Cards[0]}
            onPress={onPress}
          />
          <Item
            cardSharedValue={card2State}
            index={1}
            card={Cards[1]}
            onPress={onPress}
          />
          <Item
            cardSharedValue={card3State}
            index={2}
            card={Cards[2]}
            onPress={onPress}
          />
        </Animated.View>
      </PanGestureHandler>
      <FloatingButton floatingButton={floatingButton} />
    </View>
  )
}
