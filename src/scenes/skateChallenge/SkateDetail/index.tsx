import { RouteProp } from '@react-navigation/native'
import React from 'react'
import { Dimensions, Text, View } from 'react-native'
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated'
import { SharedElement } from 'react-navigation-shared-element'
import { ScreenNavigationProp } from 'src/types/react-navigation'

import { useCrestAnimation } from '../hooks/useCrestAnimation'
import { useHandleAnimatedBody } from '../hooks/useHandleAnimatedBody'
import { useHandleAnimations } from '../hooks/useHandleAnimations'
import { useHeaderAnimation } from '../hooks/useHeaderAnimation'
import { useOnPressBack } from '../hooks/useOnPressBack'
import { Skate } from '../types'
import { Button } from './Button'
import { Header } from './Header'
import { PriceLabel } from './PriceLabel'
import { Section } from './Section'
import { styles } from './styles'

interface LayoutProps {
  navigation: ScreenNavigationProp<any, any>
  route: RouteProp<
    {
      Skate: { skate: Skate }
    },
    'Skate'
  >
}

const { width } = Dimensions.get('window')

export const SkateDetail: React.FC<LayoutProps> = ({ route, navigation }) => {
  const { skate } = route.params

  const {
    priceProgress,
    progress,
    headerProgress,
    sizeProgress,
    materialProgress,
    descriptionProgress,
    buttonProgress,
  } = useHandleAnimations()

  const animatedBackground = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: interpolate(
          progress.value,
          [0, 1],
          [0, -width / 1.5],
          Extrapolate.CLAMP,
        ),
      },
    ],
  }))

  const { animatedCrest } = useCrestAnimation(progress)

  const { animatedHeaderLeft, animatedHeaderTitle } = useHeaderAnimation(
    headerProgress,
  )

  const {
    animatedButton,
    animatedDescription,
    animatedMaterial,
    animatedPrice,
    animatedSeparator,
    animatedSize,
  } = useHandleAnimatedBody(
    descriptionProgress,
    sizeProgress,
    materialProgress,
    priceProgress,
    buttonProgress,
  )

  const { onPress } = useOnPressBack(
    progress,
    headerProgress,
    sizeProgress,
    descriptionProgress,
    materialProgress,
    priceProgress,
    buttonProgress,
    navigation,
  )

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.background,
          {
            backgroundColor: skate.backgroundColor,
          },
          animatedBackground,
        ]}
      />
      <Animated.View style={[styles.crest, animatedCrest]}>
        <SharedElement id={skate.id}>{skate.crest}</SharedElement>
      </Animated.View>
      <Header
        title={skate.name}
        titleStyle={animatedHeaderTitle}
        leftStyle={animatedHeaderLeft}
        onPress={onPress}
      />
      <View style={styles.body}>
        <View style={styles.offsetView} />
        <View style={styles.flexible}>
          <Animated.View
            style={[styles.descriptionContainer, animatedDescription]}>
            <Text style={styles.subtitle}>{skate.description}</Text>
          </Animated.View>
          <Animated.View style={[styles.separator, animatedSeparator]} />
          <Section
            title={'SIZE'}
            description={skate.size}
            animatedStyle={animatedSize}
          />
          <Section
            title={'MATERIAL'}
            description={skate.material}
            animatedStyle={animatedMaterial}
          />
          <PriceLabel
            price={`$ ${skate.price}`}
            animatedStyle={animatedPrice}
          />
        </View>
      </View>
      <Button animatedStyle={animatedButton} />
    </View>
  )
}
