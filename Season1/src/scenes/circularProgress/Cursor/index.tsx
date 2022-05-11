import React from 'react'
import { StyleSheet } from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
} from 'react-native-reanimated'
import { canvas2Polar, polar2Canvas } from 'react-native-redash'

interface CursorProps {
  radius: number
  strokeWidth: number
  theta: any
  numberOfRevolutions: any
  previousArc: any
  previousX: any
  previousRevolutions: any
  setNumberOfRevolutions: any
  color: string
}

export const Cursor: React.FC<CursorProps> = ({
  strokeWidth,
  radius,
  theta,
  previousArc,
  previousX,
  previousRevolutions,
  setNumberOfRevolutions,
  numberOfRevolutions,
  color,
}) => {
  const center = { x: radius, y: radius }

  const onGestureEvent = useAnimatedGestureHandler({
    onActive: (event, context: any) => {
      const { translationX, translationY } = event
      const x = context.offsetX + translationX
      const y = context.offsetY + translationY
      const thetaValue = canvas2Polar({ x, y }, center).theta

      // Normalize theta values to 0 to 2PI
      theta.value = thetaValue > 0 ? thetaValue : 2 * Math.PI + thetaValue

      if (
        previousX.value > radius - 1 &&
        previousX.value < radius * 2 &&
        previousArc.value > 0 &&
        thetaValue < 0 &&
        x > radius + 1 &&
        x < radius * 2 &&
        Math.abs(numberOfRevolutions - previousRevolutions.value) === 1
      ) {
        runOnJS(setNumberOfRevolutions)(numberOfRevolutions + 1)
        previousRevolutions.value = previousRevolutions.value + 1
        previousX.value = 1
        previousArc.value = 1
      } else {
        if (
          x > radius - 1 &&
          x < radius * 2 &&
          previousArc.value < 0 &&
          thetaValue > 0 &&
          previousX.value > radius + 1 &&
          previousX.value < radius * 2 &&
          Math.abs(numberOfRevolutions - previousRevolutions.value) === 1
        ) {
          if (numberOfRevolutions !== 1 && numberOfRevolutions !== 0) {
            runOnJS(setNumberOfRevolutions)(numberOfRevolutions - 1)
            previousRevolutions.value = previousRevolutions.value - 1
          }
          previousX.value = 1
          previousArc.value = 1
        } else {
          previousArc.value = thetaValue
          previousX.value = x
        }
      }
    },
    onStart: (event, context: any) => {
      const { x, y } = polar2Canvas(
        {
          radius,
          theta: theta.value,
        },
        center,
      )
      context.offsetX = x
      context.offsetY = y
    },
  })

  const styles = StyleSheet.create({
    cursor: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: color,
      borderColor: 'white',
      borderWidth: 5,
    },
  })

  const style = useAnimatedStyle(() => {
    const { x: translateX, y: translateY } = polar2Canvas(
      {
        radius,
        theta: theta.value,
      },
      center,
    )
    return {
      transform: [{ translateX }, { translateY }],
    }
  })

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <Animated.View
        style={[
          styles.cursor,
          {
            borderRadius: strokeWidth / 2,
            height: strokeWidth,
            width: strokeWidth,
          },
          style,
        ]}
      />
    </PanGestureHandler>
  )
}
