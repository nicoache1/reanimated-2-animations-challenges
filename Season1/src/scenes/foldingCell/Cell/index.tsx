import React, { useCallback, useState } from 'react'
import {
  LayoutChangeEvent,
  LayoutRectangle,
  StyleSheet,
  View,
} from 'react-native'
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated'

import { getTransformations } from '../utils'

interface CellProps {
  layoutHeight?: number
  children: React.ReactNode
  renderBack: React.ReactChild
  renderFront: React.ReactChild
  progress: Animated.SharedValue<number>
}

const styles = StyleSheet.create({
  baseFace: {
    backgroundColor: 'transparent',
    zIndex: 0,
  },
  container: {
    backgroundColor: 'transparent',
  },
  face: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent',
  },
})

export const Cell: React.FC<CellProps> = ({
  renderBack,
  children,
  renderFront,
  layoutHeight,
  progress,
}) => {
  const LAYOUT_HEIGHT = layoutHeight ?? 200

  const [layout, setLayout] = useState<LayoutRectangle | undefined>(undefined)

  const animatedBackStyle = useAnimatedStyle(() => {
    const layoutY = layout?.y ?? 0

    const value = interpolate(
      progress.value,
      [0, 1],
      [-180, 0],
      Extrapolate.CLAMP,
    )

    let { transformations } = getTransformations(value, {
      x: 0,
      y: -LAYOUT_HEIGHT / 2,
      z: 0,
    })

    return {
      backfaceVisibility: 'hidden',
      height: LAYOUT_HEIGHT,
      top: LAYOUT_HEIGHT + layoutY,
      transform: transformations,
      zIndex: interpolate(progress.value, [0, 1], [1, 9]),
    }
  })

  const animatedFrontStyle = useAnimatedStyle(() => {
    const top = layout?.y ?? 0

    const value = interpolate(
      progress.value,
      [0, 1],
      [0, 180],
      Extrapolate.CLAMP,
    )
    let { transformations }: any = getTransformations(value, {
      x: 0,
      y: LAYOUT_HEIGHT / 2,
      z: 0,
    })

    return {
      backfaceVisibility: 'hidden',
      height: LAYOUT_HEIGHT,
      top,
      transform: transformations,
      zIndex: interpolate(progress.value, [0, 1], [9, 1]),
    }
  })

  const handleLayout = useCallback((event: LayoutChangeEvent) => {
    const animatedLayout = event.nativeEvent.layout
    setLayout(animatedLayout)
  }, [])

  return (
    <View style={[styles.container]}>
      <View
        style={[styles.baseFace, { height: LAYOUT_HEIGHT }]}
        onLayout={handleLayout}>
        {children}
      </View>
      <Animated.View
        style={[styles.face, animatedBackStyle]}
        shouldRasterizeIOS={true}>
        {renderBack}
      </Animated.View>
      <Animated.View style={[styles.face, animatedFrontStyle]}>
        {renderFront}
      </Animated.View>
    </View>
  )
}
