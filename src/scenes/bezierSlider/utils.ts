import Animated, { interpolate } from 'react-native-reanimated'
import { addCurve, addLine, createPath } from 'react-native-redash'

import { DOT_ADJUSTMENT, ELEVATION, SLIDER_WIDTH } from './constants'
import { DIRECTIONS } from './types'

export const getControlPointsByDirection = (gestureDirection: DIRECTIONS) => {
  // eslint-disable-next-line prettier/prettier
  "worklet";

  let firstCurveControlPoints = {
    c1x: 0,
    c2x: 0,
  }
  let secondCurveControlPoints = {
    c1x: 0,
    c2x: 0,
  }

  switch (gestureDirection) {
    case DIRECTIONS.STANDING:
      firstCurveControlPoints.c1x = 15
      firstCurveControlPoints.c2x = 10

      secondCurveControlPoints.c1x = 45
      secondCurveControlPoints.c2x = 35
      break

    case DIRECTIONS.RIGHT:
      firstCurveControlPoints.c1x = 15
      firstCurveControlPoints.c2x = 20

      secondCurveControlPoints.c1x = 55
      secondCurveControlPoints.c2x = 35
      break
    case DIRECTIONS.LEFT:
      firstCurveControlPoints.c1x = 15
      firstCurveControlPoints.c2x = -20

      secondCurveControlPoints.c1x = 35
      secondCurveControlPoints.c2x = 45
      break
  }

  return {
    firstCurveControlPoints,
    secondCurveControlPoints,
  }
}

export const createCurve = (
  translateX: Animated.SharedValue<number>,
  translateY: Animated.SharedValue<number>,
) => {
  // eslint-disable-next-line prettier/prettier
  "worklet";
  const curve = createPath({ x: 0, y: ELEVATION })

  addLine(curve, {
    x: translateX.value - 10 + DOT_ADJUSTMENT,
    y: ELEVATION,
  })

  const controlPointNormalElevation = interpolate(
    translateY.value,
    [-15, 0],
    [10, ELEVATION],
  )

  addCurve(curve, {
    c1: { x: translateX.value + 15 + DOT_ADJUSTMENT, y: ELEVATION },
    c2: {
      x: translateX.value + 10 + DOT_ADJUSTMENT,
      y: controlPointNormalElevation,
    },
    to: {
      x: translateX.value + 25 + DOT_ADJUSTMENT,
      y: controlPointNormalElevation,
    },
  })

  addCurve(curve, {
    c1: {
      x: translateX.value + 45 + DOT_ADJUSTMENT,
      y: controlPointNormalElevation,
    },
    c2: { x: translateX.value + 35 + DOT_ADJUSTMENT, y: ELEVATION },
    to: { x: translateX.value + 70 + DOT_ADJUSTMENT, y: ELEVATION },
  })

  addLine(curve, {
    x: SLIDER_WIDTH,
    y: ELEVATION,
  })

  return {
    curve,
  }
}
