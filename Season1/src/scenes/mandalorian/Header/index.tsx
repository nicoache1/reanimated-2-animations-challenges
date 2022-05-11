import React from 'react'
import { Dimensions, TouchableWithoutFeedback, View } from 'react-native'
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated'
import SafeAreaView from 'react-native-safe-area-view'
import CloseIcon from 'src/assets/images/mandalorian/close.svg'
import HamburguerIcon from 'src/assets/images/mandalorian/hamburger.svg'
import MandalorianLogo from 'src/assets/images/mandalorian/mandalorianLogo.svg'

import { AboutLabel } from './AboutLabel'
import { CastLabel } from './CastLabel'
import { SeriesLabel } from './SeriesLabel'
import { styles } from './styles'
import { TrailerLabel } from './TrailerLabel'

interface HeaderProps {
  headerHeight: number
  onPressHamburger: () => void
  progress: Animated.SharedValue<number>
}

const { height } = Dimensions.get('window')

export const Header: React.FC<HeaderProps> = ({
  headerHeight,
  onPressHamburger,
  progress,
}) => {
  const animatedMenu = useAnimatedStyle(() => ({
    height: interpolate(progress.value, [0, 1], [10, height / 2]),
    opacity: interpolate(progress.value, [0, 1], [0, 1], Extrapolate.CLAMP),
  }))

  const animatedHamburger = useAnimatedStyle(() => ({
    height: interpolate(progress.value, [0, 1], [40, 0]),
    opacity: interpolate(progress.value, [0, 1], [1, 0], Extrapolate.CLAMP),
  }))

  const animatedClose = useAnimatedStyle(() => ({
    height: interpolate(progress.value, [0, 1], [0, 40]),
    opacity: interpolate(progress.value, [0, 1], [0, 1], Extrapolate.CLAMP),
  }))

  return (
    <SafeAreaView
      forceInset={{ top: 'always' }}
      style={[
        {
          height: headerHeight,
        },
        styles.container,
      ]}>
      <View
        style={[
          {
            height: headerHeight,
          },
          styles.headerRow,
        ]}>
        <View style={styles.headerSideContainer} />
        <View style={styles.headerTitleContainer}>
          <MandalorianLogo width={210} />
        </View>
        <View style={styles.headerSideContainer}>
          <TouchableWithoutFeedback onPress={onPressHamburger}>
            <View style={styles.buttonContainer}>
              <Animated.View style={animatedHamburger}>
                <HamburguerIcon height={40} width={40} />
              </Animated.View>
              <Animated.View style={animatedClose}>
                <CloseIcon height={40} width={40} />
              </Animated.View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
      <Animated.View style={[styles.menuContainer, animatedMenu]}>
        <AboutLabel />
        <TrailerLabel />
        <SeriesLabel />
        <CastLabel />
      </Animated.View>
    </SafeAreaView>
  )
}
