import React, { Fragment, useCallback, useEffect } from 'react'
import { useState } from 'react'
import { Dimensions, StyleSheet } from 'react-native'
import Animated, {
  Easing,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated'
import { Routes } from 'src/navigation/Routes'
import { ScreenNavigationProp } from 'src/types/react-navigation'

import { Skates } from '../skates'
import { ItemSelected } from '../types'
import { Header } from './Header'
import { SkateItem } from './SkateItem'

const { height } = Dimensions.get('window')

interface ScreenProps {
  navigation: ScreenNavigationProp<any, Routes.CustomOnboarding>
}

const styles = StyleSheet.create({
  background: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 100,
  },
})

export const SkateChallenge: React.FC<ScreenProps> = ({ navigation }) => {
  const progress = useSharedValue(0)
  const scrollAnimation = useSharedValue(0)
  const offsetY = useSharedValue(0)

  const [selectedItem, setSelectedItem] = useState<ItemSelected>({
    color: 'transparent',
    position: { x: 0, y: 0 },
  })

  useEffect(() => {
    const listener = navigation.addListener('focus', () => {
      progress.value = 1
      progress.value = withTiming(0, {
        duration: 650,
        easing: Easing.inOut(Easing.ease),
      })
    })

    return () => navigation.removeListener('focus', listener)
  }, [navigation, progress])

  useEffect(() => {
    if (selectedItem.color !== 'transparent' && progress.value !== 0) {
      progress.value = 0
      progress.value = withTiming(1, {
        duration: 650,
        easing: Easing.inOut(Easing.ease),
      })
    }
  }, [progress, selectedItem])

  const animatedBackgroundStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: selectedItem.color,
      height: 200,
      left: selectedItem.position.x,
      top: selectedItem.position.y,
      transform: [{ scale: progress.value * ((height * 2) / 200) }],
    }
  })

  const onPress = useCallback(
    (index) => (position: ItemSelected['position']) => {
      const skate = Skates[index]
      setSelectedItem({ color: skate.backgroundColor, position })
      navigation.navigate(Routes.SkateDetail, { skate })
    },
    [navigation],
  )

  const scrollHandler = useAnimatedScrollHandler({
    onEndDrag: () => {
      scrollAnimation.value = withSpring(0, {
        damping: 10,
        mass: 2,
        stiffness: 200,
        velocity: 2,
      })
    },
    onMomentumEnd: () => {
      scrollAnimation.value = withSpring(0, {
        damping: 10,
        mass: 2,
        stiffness: 200,
        velocity: 2,
      })
    },
    onScroll: (event) => {
      scrollAnimation.value = withTiming(1, { duration: 200 })
      offsetY.value = event.contentOffset.y
    },
  })

  const onPressGoBack = useCallback(() => navigation.goBack(), [navigation])

  return (
    <Fragment>
      <Header
        backgroundColor={{ backgroundColor: Skates[0].backgroundColor }}
        offsetY={offsetY}
        onPressGoBack={onPressGoBack}
      />
      <Animated.View style={[animatedBackgroundStyle, styles.background]} />
      <Animated.ScrollView
        onScroll={scrollHandler}
        scrollEventThrottle={10}
        bounces={false}>
        {Skates.map((skate, index) => (
          <SkateItem
            skate={skate}
            key={`${skate.id}`}
            onPress={onPress(index)}
            scrollAnimation={scrollAnimation}
          />
        ))}
      </Animated.ScrollView>
    </Fragment>
  )
}
