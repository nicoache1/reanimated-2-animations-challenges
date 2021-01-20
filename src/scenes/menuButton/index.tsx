import React, { useState } from 'react'
import { LayoutChangeEvent, StyleSheet, View } from 'react-native'
import {
  TapGestureHandler,
  TapGestureHandlerGestureEvent,
} from 'react-native-gesture-handler'
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated'
import Home from 'src/assets/images/customTabBar/home.svg'
import Profile from 'src/assets/images/customTabBar/profile.svg'
import Search from 'src/assets/images/customTabBar/search.svg'
import AddIcon from 'src/assets/images/menuButton/add.svg'

import { Item } from './Item'
import { BUTTON_SIZE } from './types'

interface MenuButtonProps {}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  menuButton: {
    alignItems: 'center',
    backgroundColor: '#EBBE67',
    borderRadius: BUTTON_SIZE / 2,
    elevation: 5,
    height: BUTTON_SIZE,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: BUTTON_SIZE,
    zIndex: 3,
  },
})

export const MenuButton: React.FC<MenuButtonProps> = ({}) => {
  const enabled = useSharedValue<number>(0)
  const iconAnimation = useSharedValue<number>(0)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const tapGestureEvent = useAnimatedGestureHandler<
    TapGestureHandlerGestureEvent,
    any
  >({
    onFinish: () => {
      iconAnimation.value = withTiming(iconAnimation.value === 0 ? 1 : 0)
      enabled.value = withDelay(400, withTiming(enabled.value === 0 ? 1 : 0))
    },
  })

  const onLayout = (event: LayoutChangeEvent) => {
    const newPosition = event.nativeEvent.layout
    setPosition({ x: newPosition.x, y: newPosition.y })
  }

  return (
    <View style={styles.container}>
      <TapGestureHandler
        onGestureEvent={tapGestureEvent}
        minPointers={1}
        maxDurationMs={10}>
        <Animated.View onLayout={onLayout} style={styles.menuButton}>
          <AddIcon />
        </Animated.View>
      </TapGestureHandler>
      <Item
        position={position}
        enabled={enabled}
        text={'1'}
        // eslint-disable-next-line no-console
        onPress={() => console.log('Press 1')}
        translationY={-80}
        translationX={80}
        icon={<Home stroke={'black'} />}
        iconAnimation={iconAnimation}
      />
      <Item
        position={position}
        enabled={enabled}
        text={'2'}
        // eslint-disable-next-line no-console
        onPress={() => console.log('Press 2')}
        translationX={120}
        icon={<Profile stroke={'black'} />}
        iconAnimation={iconAnimation}
      />
      <Item
        position={position}
        enabled={enabled}
        text={'3'}
        // eslint-disable-next-line no-console
        onPress={() => console.log('Press 3')}
        translationY={80}
        translationX={80}
        icon={<Search stroke={'black'} />}
        iconAnimation={iconAnimation}
      />
    </View>
  )
}
