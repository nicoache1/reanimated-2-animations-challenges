import React, { useLayoutEffect, useState } from 'react'
import { useCallback } from 'react'
import { Dimensions, View } from 'react-native'
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import Circle from 'src/assets/images/customOnboarding/circle.svg'
import { Routes } from 'src/navigation/Routes'
import { ScreenNavigationProp } from 'src/types/react-navigation'

import { Button } from './Button'
import { Slide1 } from './Slide1'
import { Slide2 } from './Slide2'
import { Slide3 } from './Slide3'
import { Slide4 } from './Slide4'
import { styles } from './styles'

const { width, height } = Dimensions.get('window')

const colors = ['#6C5CE7', '#FF7675', '#00B894', '#FD79A8']
const buttonColors = [
  'rgb(0,184,148)',
  'rgb(108,92,231)',
  'rgb(255,118,117)',
  'rgb(0,184,148)',
]
const snapPoints = [0, -width, -width * 2, -width * 3]
const circleYPositions = [height / 5, height / 3, height / 5, height / 6]
const circleXPositions = [-20, -40, 10, -30]
const circleScaleSizes = [1, 1.5, 1.2, 1.4]
const rotations = [-40, 0, 0, -40]
const buttonText = ['START NOW', 'NEXT', 'NEXT', 'BEGIN']

interface ScreenProps {
  navigation: ScreenNavigationProp<any, Routes.CustomOnboarding>
}

export const CustomOnboarding: React.FC<ScreenProps> = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [navigation])

  const translateX = useSharedValue(0)
  const circleTranslateY = useSharedValue(height / 5)
  const circleTranslateX = useSharedValue(-20)
  const circleScale = useSharedValue(1)
  const circleRotate = useSharedValue(-40)
  const [index, setIndex] = useState<number>(0)

  const derivedBackground = useDerivedValue(() => {
    const WIDTH_3 = width * 3
    const WIDTH_2 = width * 2
    const WIDTH_1 = width

    return interpolateColor(
      translateX.value * -1,
      [0, WIDTH_1, WIDTH_2, WIDTH_3],
      colors,
      'RGB',
    ) as string
  })

  const derivedButtonColor = useDerivedValue(() => {
    const WIDTH_3 = width * 3
    const WIDTH_2 = width * 2
    const WIDTH_1 = width

    return interpolateColor(
      translateX.value * -1,
      [0, WIDTH_1, WIDTH_2, WIDTH_3],
      buttonColors,
      'RGB',
    ) as string
  })

  const animatedBackgroundStyle = useAnimatedStyle(
    () => ({
      backgroundColor: derivedBackground.value,
    }),
    [derivedButtonColor],
  )

  const animatedButtonStyle = useAnimatedStyle(
    () => ({
      backgroundColor: derivedButtonColor.value,
    }),
    [derivedButtonColor],
  )

  const onPress = useCallback(() => {
    if (index !== 3) {
      const newIndex = index + 1

      const value = snapPoints[newIndex]
      const circleYPosition = circleYPositions[newIndex]
      const circleXPosition = circleXPositions[newIndex]
      const circleScaleSize = circleScaleSizes[newIndex]
      const circleRotation = rotations[newIndex]

      translateX.value = withTiming(value, { duration: 400 })

      circleTranslateY.value = withTiming(circleYPosition, { duration: 500 })
      circleTranslateX.value = withTiming(circleXPosition, { duration: 500 })
      circleScale.value = withTiming(circleScaleSize, { duration: 500 })
      circleRotate.value = withTiming(circleRotation, { duration: 500 })

      setIndex(newIndex)
    }
  }, [
    circleRotate,
    circleScale,
    circleTranslateX,
    circleTranslateY,
    index,
    translateX,
  ])

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }))

  const circleAnimatedStyle = useAnimatedStyle(() => ({
    right: circleTranslateX.value,
    top: circleTranslateY.value,
    transform: [
      { scale: circleScale.value },
      { rotate: `${circleRotate.value}deg` },
    ],
  }))

  return (
    <Animated.View style={[styles.container, animatedBackgroundStyle]}>
      <View style={styles.header} />
      <Animated.View style={[styles.circle, circleAnimatedStyle]}>
        <Circle />
      </Animated.View>
      <View style={styles.slider}>
        <Animated.View style={[styles.sliderContainer, animatedStyle]}>
          <Slide1 />
          <Slide2 />
          <Slide3 />
          <Slide4 />
        </Animated.View>
      </View>
      <View style={styles.footer}>
        <Button
          onPress={onPress}
          backgroundColor={animatedButtonStyle}
          text={buttonText[index]}
        />
      </View>
    </Animated.View>
  )
}
