import {
  StackNavigationOptions,
  useHeaderHeight,
} from '@react-navigation/stack'
import React, { useCallback, useLayoutEffect } from 'react'
import { Dimensions, ImageBackground, Text, View } from 'react-native'
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import aboutBackground from 'src/assets/images/mandalorian/aboutBackground.png'
import { SceneContainer } from 'src/component/SceneContainer'
import { Routes } from 'src/navigation/Routes'
import { SceneProps } from 'src/types/react-navigation'
import { useMemoOne } from 'use-memo-one'

import { Header } from '../Header'
import { outerInset } from './sceneConfig'
import { styles } from './styles'

interface AboutProps extends SceneProps<any, Routes.MandalorianAbout> {}

const { height } = Dimensions.get('window')

export const About: React.FC<AboutProps> = ({ navigation }) => {
  const progress = useSharedValue<number>(0)
  const headerHeight = useHeaderHeight()

  const onPressHamburger = useCallback(() => {
    progress.value = withTiming(progress.value === 0 ? 1 : 0)
  }, [progress])

  const value = useMemoOne(() => headerHeight, [])

  useLayoutEffect(() => {
    const options: StackNavigationOptions = {
      header: () => (
        <Header
          headerHeight={value}
          onPressHamburger={onPressHamburger}
          progress={progress}
        />
      ),
      headerTransparent: true,
    }

    navigation.setOptions(options)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const animatedContent = useAnimatedStyle(() => ({
    transform: [
      { translateY: interpolate(progress.value, [0, 1], [-height / 2, 0]) },
    ],
  }))

  return (
    <ImageBackground source={aboutBackground} style={styles.background}>
      <SceneContainer forceInset={outerInset} style={styles.sceneStyle}>
        <View style={styles.overlay} />
        <Animated.View style={[styles.content, animatedContent]}>
          <Text style={styles.text}>
            {`After the stories of Jango and Boba Fett, another warrior emerges in the Star Wars universe. The Mandalorian is set after the fall of the Empire and before the emergence of the First Order. We follow the travails of a lone gunfighter in the outer reaches of the galaxy far from the authority of the New Republic. \n\nFive years after the defeat of the Galactic Empire, a Mandalorian bounty hunter accepts an under-the-table job from an enigmatic client with Imperial connections, who demand he travel to the desert planet Arvala-7 and find a fifty-year-old target`}
          </Text>
        </Animated.View>
      </SceneContainer>
    </ImageBackground>
  )
}
