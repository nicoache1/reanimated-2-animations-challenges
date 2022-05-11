import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler'
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import { snapPoint } from 'react-native-redash'
import { Routes } from 'src/navigation/Routes'
import { ScreenNavigationProp } from 'src/types/react-navigation'

import { ITEM_SIZE, SPACER_SIZE, SPACING } from './constants'
import { Item } from './Item'
import { items } from './items'
import { Spacing } from './Spacing'
import { ExpandingItem, ExpandingType } from './types'

interface ExpandingCollectionProps {
  navigation: ScreenNavigationProp<any, any>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  item: {
    flex: 1,
    flexDirection: 'row',
  },
})

const snapPoints = items
  .filter((item) => item.type !== ExpandingType.SPACER)
  .map((_, index) => (SPACER_SIZE + ITEM_SIZE - SPACING / 2) * -index)

export const ExpandingCollection: React.FC<ExpandingCollectionProps> = ({
  navigation,
}) => {
  const translateX = useSharedValue<number>(0)
  const [selectedItem, setSelectedItem] = useState<number | undefined>(
    undefined,
  )

  useEffect(() => {
    if (selectedItem !== undefined) {
      navigation.navigate(Routes.ExpandingCollectionDetail, {
        item: items[selectedItem],
      })
    }
    return () => {
      setSelectedItem(undefined)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedItem])

  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    {
      offsetX: number
    }
  >({
    onActive: (event, context: any) => {
      translateX.value = context.offsetX + event.translationX
    },
    onEnd: ({ velocityX }) => {
      const destination = snapPoint(translateX.value, velocityX, snapPoints)
      translateX.value = withTiming(destination)
    },
    onStart: (_, context: any) => {
      context.offsetX = translateX.value
    },
  })

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }))

  return (
    <View style={styles.container}>
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View style={[styles.item, animatedStyle]}>
          {items.map((item, index) =>
            item.type === ExpandingType.SPACER ? (
              <Spacing />
            ) : (
              <Item
                index={index}
                item={item as ExpandingItem}
                translateX={translateX}
                setSelectedItem={setSelectedItem}
                selected={selectedItem === index}
              />
            ),
          )}
        </Animated.View>
      </PanGestureHandler>
    </View>
  )
}
