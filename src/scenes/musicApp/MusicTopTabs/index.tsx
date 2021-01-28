import React, { useCallback } from 'react'
import { View } from 'react-native'
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated'
import { SceneContainer } from 'src/component/SceneContainer'

import { colors, sliderSnapPoints, snapPoints, tabs } from '../constants'
import { outerInset } from '../sceneConfig'
import { SearchBar } from './SearchBar'
import { styles } from './styles'
import { TabContent } from './TabContent'
import { TabItem } from './TabItem'

interface CustomTopTabsProps {}

export const MusicTopTabs: React.FC<CustomTopTabsProps> = ({}) => {
  const translateXSlider = useSharedValue<number>(sliderSnapPoints[0])
  const translateX = useSharedValue<number>(0)

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateXSlider.value }],
  }))

  const onPress = useCallback(
    (sliderSnapPoint: number) => () => {
      translateXSlider.value = withDelay(
        200,
        withTiming(sliderSnapPoint, {
          duration: 300,
          easing: Easing.in(Easing.cubic),
        }),
      )
      translateX.value = withTiming(
        snapPoints[sliderSnapPoints.indexOf(sliderSnapPoint)],
      )
    },
    [translateX, translateXSlider],
  )

  return (
    <SceneContainer forceInset={outerInset}>
      <View style={styles.container}>
        <SearchBar />
        <View style={styles.tabContainer}>
          {tabs.map((tab, index) => (
            <TabItem
              key={index}
              onPress={onPress(sliderSnapPoints[index])}
              title={tab}
            />
          ))}
          <Animated.View style={[styles.slider, animatedStyle]} />
        </View>
        <Animated.View style={styles.tabsContent}>
          {tabs.map((tab, index) => (
            <TabContent
              key={`${tab}${index}`}
              index={index}
              xPosition={translateX}
              color={colors[index]}
            />
          ))}
        </Animated.View>
      </View>
    </SceneContainer>
  )
}
