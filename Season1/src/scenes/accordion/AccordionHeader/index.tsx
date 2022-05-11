import React from 'react'
import { StyleProp, Text, View, ViewStyle } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedProps,
  useAnimatedStyle,
} from 'react-native-reanimated'
import Svg, { Circle, Path } from 'react-native-svg'

import { players } from '../goatPlayers'
import { ITEM_HEIGHT } from '../types'
import { styles } from './styles'

interface LayoutProps {
  onPress: () => void
  animatedBorder: StyleProp<ViewStyle>
  animatedHeight: Animated.SharedValue<number>
}

const AnimatedCircle = Animated.createAnimatedComponent(Circle)

export const AccordionHeader: React.FC<LayoutProps> = ({
  onPress,
  animatedBorder,
  animatedHeight,
}) => {
  const props = useAnimatedProps(() => ({
    fill: interpolateColor(
      animatedHeight.value,
      [0, ITEM_HEIGHT * players.length],
      ['rgb(229,32,32)', 'rgb(49,128,22)'],
    ),
  }))

  const style = useAnimatedStyle(() => {
    const rotateZ = interpolate(
      animatedHeight.value,
      [0, ITEM_HEIGHT * players.length],
      [0, Math.PI],
    )
    return {
      transform: [{ rotateZ }],
    }
  })

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View style={[styles.container, animatedBorder]}>
        <View style={styles.title}>
          <Text>Accordion Header</Text>
        </View>
        <Animated.View style={[styles.iconContainer, style]}>
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <AnimatedCircle cx="12" cy="12" r="12" animatedProps={props} />
            <Path
              d="M6 9C10.8 14.2 12.3333 15.8333 12.5 16L18.5 9"
              stroke="white"
              strokeWidth={2}
            />
          </Svg>
        </Animated.View>
      </Animated.View>
    </TouchableWithoutFeedback>
  )
}
