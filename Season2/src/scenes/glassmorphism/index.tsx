import {
  add,
  BackdropFilter,
  Canvas,
  Circle,
  ColorMatrix,
  DisplacementMap,
  Group,
  LinearGradient,
  mix,
  Offset,
  Paint,
  sub,
  Turbulence,
  useDerivedValue,
  useLoop,
  vec,
} from '@shopify/react-native-skia'
import React, { useLayoutEffect } from 'react'
import { Dimensions, StyleSheet } from 'react-native'
import { SceneContainer } from 'src/components/SceneContainer'
import { Routes } from 'src/navigation/routes'
import { SceneProps } from 'src/navigation/types'

import { BLACK_AND_WHITE, COLD_LIFE } from './colorMatrices'
import { SkyImage } from './SkyImage'

const styles = StyleSheet.create({
  canvasContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
})

const { width, height } = Dimensions.get('window')
const center = vec(width / 2, height / 2)
const r = center.x - 32

export const Glassmorphism: SceneProps<Routes.Glassmorphism> = ({
  navigation,
}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitleVisible: false,
      headerTintColor: 'white',
      headerTransparent: true,
    })
  }, [navigation])

  const progress = useLoop({ duration: 2000 })
  const start = useDerivedValue(
    () => sub(center, vec(0, mix(progress.current, r, r / 2))),
    [progress],
  )
  const end = useDerivedValue(
    () => add(center, vec(0, mix(progress.current, r, r / 2))),
    [],
  )

  const freqX = useDerivedValue(
    () => mix(progress.current, 0.01, 0.009),
    [progress],
  )
  const freqY = useDerivedValue(
    () => mix(progress.current, 0.05, 0.049),
    [progress],
  )

  return (
    <SceneContainer
      style={styles.container}
      edges={['left']}
      barStyle="light-content">
      <Canvas style={styles.canvasContainer}>
        <SkyImage x={0} y={0} />
        <SkyImage x={0} y={center.y} />
        <Group>
          <Paint>
            <LinearGradient
              start={start}
              end={end}
              colors={['blue', 'black']}
            />
          </Paint>
          <Circle c={center} r={r} />
        </Group>
        <BackdropFilter
          filter={<ColorMatrix matrix={BLACK_AND_WHITE} />}
          clip={{ height: center.y, width: width, x: 0, y: 0 }}
        />
        <BackdropFilter
          filter={
            <ColorMatrix matrix={COLD_LIFE}>
              <Offset x={-10}>
                <DisplacementMap channelX="a" channelY="r" scale={50}>
                  <Turbulence freqX={freqX} freqY={freqY} octaves={4} />
                </DisplacementMap>
              </Offset>
            </ColorMatrix>
          }
          clip={{ height: center.y, width: width + 50, x: 0, y: center.y }}
        />
      </Canvas>
    </SceneContainer>
  )
}
