import React, { useEffect, useMemo } from 'react'
import { Text, View } from 'react-native'
import {
  TapGestureHandler,
  TapGestureHandlerGestureEvent,
} from 'react-native-gesture-handler'
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

import { TabBarItem } from '../types'
import { styles } from './styles'

interface LayoutProps extends TabBarItem {
  active: boolean
  onPress: () => void
}

const INITIAL_FLEX = 1

export const Item: React.FC<LayoutProps> = ({
  color,
  active,
  onPress,
  icon,
  label,
  textColor,
}) => {
  const widthAnimated = useSharedValue(INITIAL_FLEX)
  const opacity = useSharedValue(0)
  const heightAnimated = useSharedValue(0)

  useEffect(() => {
    if (active === true) {
      widthAnimated.value = withTiming(1.8, { duration: 400 })
      opacity.value = withTiming(1, { duration: 400 })
      heightAnimated.value = withTiming(25, { duration: 400 })
    } else {
      widthAnimated.value = withTiming(INITIAL_FLEX)
      opacity.value = withTiming(0)
      heightAnimated.value = withTiming(0)
    }
  }, [active, heightAnimated, opacity, widthAnimated])

  const style = useAnimatedStyle(() => ({
    flex: widthAnimated.value,
    justifyContent: 'center',
  }))

  const labelStyle = useAnimatedStyle(() => ({
    height: heightAnimated.value,

    opacity: opacity.value,
  }))

  const tapGestureEvent = useAnimatedGestureHandler<
    TapGestureHandlerGestureEvent,
    any
  >({
    onActive: () => {
      runOnJS(onPress)()
    },
  })

  const internalLabelColorStyle = useMemo(
    () => ({
      backgroundColor: active ? color : 'white',
    }),
    [active, color],
  )

  return (
    <TapGestureHandler onGestureEvent={tapGestureEvent}>
      <Animated.View style={style}>
        <View style={[internalLabelColorStyle, styles.internalLabel]}>
          <View style={styles.iconContainer}>{icon(active)}</View>
          {active && (
            <Animated.View style={[labelStyle, styles.labelContainer]}>
              <Text
                style={[
                  {
                    color: textColor,
                  },
                  styles.label,
                ]}>
                {label}
              </Text>
            </Animated.View>
          )}
        </View>
      </Animated.View>
    </TapGestureHandler>
  )
}
