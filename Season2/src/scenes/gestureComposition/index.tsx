import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated'
import { SceneContainer } from 'src/components/SceneContainer'

interface GestureCompositionProps {}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export const GestureComposition: React.FC<GestureCompositionProps> = ({}) => {
  const scale = useSharedValue<number>(1)
  const startScale = useSharedValue<number>(1)
  const translation = useSharedValue<{ x: number; y: number }>({ x: 0, y: 0 })
  const startTranslation = useSharedValue<{ x: number; y: number }>({
    x: 0,
    y: 0,
  })

  const pinchGesture = Gesture.Pinch()
    .onUpdate(({ scale: scaleValue }) => {
      scale.value = scaleValue * startScale.value
    })
    .onStart(() => {
      startScale.value = scale.value
    })

  const panGesture = Gesture.Pan()
    .onUpdate(({ translationX, translationY }) => {
      translation.value = {
        x: translationX + startTranslation.value.x,
        y: translationY + startTranslation.value.y,
      }
    })
    .onEnd(() => {
      startTranslation.value = {
        x: translation.value.x,
        y: translation.value.y,
      }
    })

  const composableGesture = Gesture.Simultaneous(panGesture, pinchGesture)

  const animatedStyle = useAnimatedStyle(() => ({
    backgroundColor: 'blue',
    height: 400,
    left: 100,
    position: 'absolute',
    top: 100,
    transform: [
      { scale: scale.value },
      { translateX: translation.value.x },
      { translateY: translation.value.y },
    ],
    width: 200,
  }))

  return (
    <SceneContainer style={styles.container}>
      <GestureDetector gesture={composableGesture}>
        <Animated.View style={animatedStyle}>
          <Text>PINCH ME!</Text>
        </Animated.View>
      </GestureDetector>
    </SceneContainer>
  )
}
