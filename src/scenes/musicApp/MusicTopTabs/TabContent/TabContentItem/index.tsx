import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, TouchableWithoutFeedback, View } from 'react-native'
import Animated, {
  useAnimatedReaction,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated'
import { SharedElement } from 'react-navigation-shared-element'
import { Routes } from 'src/navigation/Routes'

import { useAnimatedAlbum } from './hooks/useAnimatedAlbum'
import { useAnimatedDisc } from './hooks/useAnimatedDisc'
import { useAnimatedRows } from './hooks/useAnimatedRows'
import { styles } from './styles'

interface TabContentItemProps {
  indexColumn: number
  itemNumber: number
  xPosition: Animated.SharedValue<number>
  delay: number
  offsetY: Animated.SharedValue<number>
}

export const TabContentItem: React.FC<TabContentItemProps> = ({
  indexColumn,
  xPosition,
  delay,
  offsetY,
  itemNumber,
}) => {
  const navigation = useNavigation()
  const progress = useSharedValue<number>(0)

  useAnimatedReaction(
    () => xPosition,
    (xPositionChange) => {
      progress.value = withDelay(
        delay,
        withTiming(xPositionChange.value, { duration: 500 }),
      )
    },
  )

  const { animatedStyle } = useAnimatedRows(indexColumn, progress)
  const { animatedAlbum } = useAnimatedAlbum(itemNumber, offsetY)
  const { animatedDisc } = useAnimatedDisc(itemNumber, offsetY)

  const onPress = () =>
    navigation.navigate(Routes.MusicPlayer, {
      song: { id: `${indexColumn}${itemNumber}` },
    })

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View style={[styles.container, animatedStyle]}>
        <SharedElement
          style={styles.albumContainer}
          id={`${indexColumn}${itemNumber}`}>
          <Animated.View style={[styles.album, styles.shadow, animatedAlbum]} />
          <Animated.View style={[styles.disc, animatedDisc]} />
        </SharedElement>
        <View style={[styles.item, styles.shadow]}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Title</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.text}>Description</Text>
            <Text style={styles.text}>Category</Text>
          </View>
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  )
}
