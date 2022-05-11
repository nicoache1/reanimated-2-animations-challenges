import { NavigationProp, RouteProp } from '@react-navigation/native'
import React from 'react'
import { Dimensions, StyleSheet } from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated'
import { snapPoint } from 'react-native-redash'
import Video from 'react-native-video'
import { SharedElement } from 'react-navigation-shared-element'

import { Story } from '../types'
import { styles } from './styles'

const { height } = Dimensions.get('window')

interface LayoutProps {
  navigation: NavigationProp<any, 'Story'>
  route: RouteProp<
    {
      Story: { story: Story }
    },
    'Story'
  >
}

const AnimatedVideo = Animated.createAnimatedComponent(Video)

export const SnapchatStory: React.FC<LayoutProps> = ({ route, navigation }) => {
  const { story } = route.params

  const translateX = useSharedValue(0)
  const translateY = useSharedValue(0)
  const isGestureActive = useSharedValue(false)

  const onGestureEvent = useAnimatedGestureHandler({
    onActive: (event) => {
      translateX.value = event.translationX
      translateY.value = event.translationY
    },
    onEnd: (event) => {
      const goBack =
        snapPoint(translateY.value, event.velocityY, [0, height]) === height
      if (goBack) {
        runOnJS(navigation.goBack)()
      } else {
        translateX.value = withSpring(0, { velocity: event.velocityX })
        translateY.value = withSpring(0, { velocity: event.velocityY })
      }
      isGestureActive.value = false
    },
    onStart: () => {
      isGestureActive.value = true
    },
  })

  const borderStyle = useAnimatedStyle(() => ({
    borderRadius: withTiming(isGestureActive.value ? 24 : 0),
  }))

  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      translateY.value,
      [0, height],
      [1, 0.5],
      Extrapolate.CLAMP,
    )
    return {
      flex: 1,
      transform: [
        { translateX: translateX.value * scale },
        { translateY: translateY.value * scale },
        { scale },
      ],
    }
  })

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <Animated.View style={animatedStyle}>
        <SharedElement id={story.id} style={styles.flexible}>
          {!story.video && (
            <Animated.Image
              source={story.source}
              style={[styles.image, borderStyle]}
            />
          )}
          {story.video && (
            <AnimatedVideo
              muted={false}
              repeat={true}
              source={story.video}
              rate={1.0}
              resizeMode="cover"
              style={[StyleSheet.absoluteFill, borderStyle]}
            />
          )}
        </SharedElement>
      </Animated.View>
    </PanGestureHandler>
  )
}
