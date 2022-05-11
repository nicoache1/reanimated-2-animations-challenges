import React, { useLayoutEffect } from 'react'
import { StyleSheet } from 'react-native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated'
import { clamp, snapPoint } from 'react-native-redash'
import { SceneContainer } from 'src/components/SceneContainer'
import { Routes } from 'src/navigation/routes'
import { SceneProps } from 'src/navigation/types'

import { examples } from './examples'
import { Item } from './Item'
import { MAX_HEIGHT } from './Item/types'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const snapPoints = examples.map((_, index) => index * -MAX_HEIGHT)

export const Home: SceneProps<Routes.Home> = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [navigation])

  const translateY = useSharedValue<number>(0)
  const startY = useSharedValue<number>(0)

  const onPress = (route: Routes, index: number) => () => {
    if (translateY.value === index * -MAX_HEIGHT) {
      navigation.push(route)
    }
  }

  const gesture = Gesture.Pan()
    .onUpdate(({ translationY }) => {
      translateY.value = clamp(
        translationY + startY.value,
        -(examples.length - 1) * MAX_HEIGHT,
        0,
      )
    })
    .onEnd(({ velocityY }) => {
      const destination = snapPoint(translateY.value, velocityY, snapPoints)
      translateY.value = withSpring(destination, {
        overshootClamping: true,
        velocity: velocityY,
      })
    })
    .onStart(() => {
      startY.value = translateY.value
    })

  return (
    <SceneContainer style={styles.container}>
      <GestureDetector gesture={gesture}>
        <Animated.View>
          {examples.map((item, index) => (
            <Item
              item={item}
              key={index}
              index={index}
              offsetY={translateY}
              onPress={onPress(item.route, index)}
            />
          ))}
        </Animated.View>
      </GestureDetector>
    </SceneContainer>
  )
}
