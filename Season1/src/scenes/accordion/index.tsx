import React, { useCallback } from 'react'
import { View } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

import { AccordionHeader } from './AccordionHeader'
import { AccordionItem } from './AccordionItem'
import { players } from './goatPlayers'
import { styles } from './styles'
import { ITEM_HEIGHT } from './types'

export const AccordionList: React.FC<{}> = () => {
  const heightAnimated = useSharedValue(0)

  const onPress = useCallback(() => {
    heightAnimated.value = withTiming(
      heightAnimated.value === 0 ? ITEM_HEIGHT * players.length : 0,
      {
        duration: 400,
      },
    )
  }, [heightAnimated])

  const animatedStyle = useAnimatedStyle(() => ({
    height: heightAnimated.value,
    overflow: 'hidden',
  }))

  const animatedBorder = useAnimatedStyle(() => ({
    borderBottomLeftRadius: heightAnimated.value === 0 ? 10 : 0,
    borderBottomRightRadius: heightAnimated.value === 0 ? 10 : 0,
  }))

  return (
    <View style={styles.container}>
      <AccordionHeader
        onPress={onPress}
        animatedBorder={animatedBorder}
        animatedHeight={heightAnimated}
      />
      <Animated.View style={animatedStyle}>
        {players.map((goatPlayer, index) => (
          <AccordionItem
            {...goatPlayer}
            isLast={index === players.length - 1}
          />
        ))}
      </Animated.View>
    </View>
  )
}
