import React from 'react'
import { Dimensions, StyleSheet } from 'react-native'
import Animated, {
  useAnimatedReaction,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated'

import { TabContentItem } from './TabContentItem'

interface TabContentProps {
  index: number
  xPosition: Animated.SharedValue<number>
  color: string
}

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    flex: 1,
    marginTop: 20,
    width,
  },
})

export const TabContent: React.FC<TabContentProps> = ({ index, xPosition }) => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  const progress = useSharedValue<number>(0)
  const offsetY = useSharedValue<number>(0)

  useAnimatedReaction(
    () => xPosition,
    (xPositionChange) => {
      progress.value = withDelay(
        200,
        withTiming(xPositionChange.value, { duration: 500 }),
      )
    },
  )

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: -progress.value }],
    }
  })

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      offsetY.value = event.contentOffset.y
    },
  })

  return (
    <Animated.View style={animatedStyle}>
      <Animated.ScrollView
        onScroll={scrollHandler}
        scrollEventThrottle={9}
        style={[styles.container]}
        showsVerticalScrollIndicator={false}>
        {items.map((_, indexRow) => (
          <TabContentItem
            key={`${index}${indexRow}`}
            indexColumn={index}
            xPosition={xPosition}
            itemNumber={indexRow}
            delay={150 * indexRow + 1}
            offsetY={offsetY}
          />
        ))}
      </Animated.ScrollView>
    </Animated.View>
  )
}
