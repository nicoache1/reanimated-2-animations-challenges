import React, { useMemo, useState } from 'react'
import { PixelRatio, StyleSheet, View } from 'react-native'
import Animated, { useSharedValue } from 'react-native-reanimated'
import { canvas2Polar } from 'react-native-redash'

import { AnimatedCircular } from './AnimatedCircular'
import { Cursor } from './Cursor'

const colors = ['#FFC27A', '#7EDAB9', '#45A6E5', '#FE8777']

export const CircularProgress = () => {
  const [numberOfRevolutions, setNumberOfRevolutions] = useState(0)
  const previousRevolutions = useSharedValue(-1)
  const previousArc = useSharedValue(1)
  const previousX = useSharedValue(1)

  const size = 250
  const STROKE_WIDTH = 30
  const r = PixelRatio.roundToNearestPixel(size / 2)
  const defaultTheta = canvas2Polar({ x: 0, y: 0 }, { x: r, y: r }).theta

  const theta = useSharedValue(defaultTheta)
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
    },
    content: {
      height: r * 2,
      width: r * 2,
    },
  })

  const color = useMemo(() => colors[numberOfRevolutions % 4], [
    numberOfRevolutions,
  ])

  const previousColor = useMemo(() => {
    const index = colors.indexOf(color)
    if (index === 0) {
      return colors[colors.length - 1]
    }
    return colors[index - 1]
  }, [color])

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Animated.View style={StyleSheet.absoluteFill}>
          <AnimatedCircular
            strokeWidth={STROKE_WIDTH}
            r={r}
            theta={theta}
            color={color}
            previousColor={previousColor}
          />
        </Animated.View>
        <Cursor
          color={color}
          strokeWidth={STROKE_WIDTH}
          radius={r - STROKE_WIDTH / 2}
          theta={theta}
          previousArc={previousArc}
          previousX={previousX}
          previousRevolutions={previousRevolutions}
          numberOfRevolutions={numberOfRevolutions}
          setNumberOfRevolutions={setNumberOfRevolutions}
        />
      </View>
    </View>
  )
}
