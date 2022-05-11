import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Animated, {
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import { mixPath, useVector } from 'react-native-redash'
import Svg, { Path } from 'react-native-svg'

import { Cursor } from '../Cursor'
import { Header } from '../Header'
import { SIZE } from '../types'
import { graphs } from './graphsData'
import { BUTTON_WIDTH } from './styles'
import { styles } from './styles'

const AnimatedPath = Animated.createAnimatedComponent<any, any>(Path)

export const Graph = () => {
  const translation = useVector()
  const transition = useSharedValue(0)
  const previous = useSharedValue(0)
  const current = useSharedValue(0)

  const animatedProps = useAnimatedProps(() => {
    const previousPath = graphs[previous.value].data.path
    const currentPath = graphs[current.value].data.path
    return {
      d: mixPath(transition.value, previousPath, currentPath),
    }
  }, [previous, current])

  const style = useAnimatedStyle(() => ({
    transform: [{ translateX: withTiming(BUTTON_WIDTH * current.value) }],
  }))

  return (
    <View style={styles.container}>
      <Header translation={translation} index={current} />
      <View>
        <Svg width={SIZE} height={SIZE}>
          <AnimatedPath
            animatedProps={animatedProps}
            fill="transparent"
            stroke="black"
            strokeWidth={3}
          />
        </Svg>
        <Cursor translation={translation} index={current} />
      </View>
      <View style={styles.selection}>
        <View style={StyleSheet.absoluteFill}>
          <Animated.View style={[styles.backgroundSelection, style]} />
        </View>
        {graphs.map((graph, index) => {
          return (
            <TouchableWithoutFeedback
              key={graph.label}
              onPress={() => {
                previous.value = current.value
                transition.value = 0
                current.value = index
                transition.value = withTiming(1)
              }}>
              <Animated.View style={[styles.labelContainer]}>
                <Text style={styles.label}>{graph.label}</Text>
              </Animated.View>
            </TouchableWithoutFeedback>
          )
        })}
      </View>
    </View>
  )
}
