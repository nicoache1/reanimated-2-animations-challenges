import React from 'react'
import { Dimensions, StyleSheet } from 'react-native'
import { SensorType, useAnimatedSensor } from 'react-native-reanimated'
import { SceneContainer } from 'src/components/SceneContainer'
import { Routes } from 'src/navigation/routes'
import { SceneProps } from 'src/navigation/types'

import { Background } from './Background'
import { Boat } from './Boat'
import { Land } from './Land'
import { Star } from './Star'
import { Water } from './Water'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const { height } = Dimensions.get('window')
const WATER_HEIGHT = height * 0.4

export const GhostInterface: SceneProps<Routes.GhostInterface> = ({}) => {
  const accelerometer = useAnimatedSensor(SensorType.ACCELEROMETER, {
    interval: 10,
  })

  return (
    <SceneContainer style={styles.container}>
      <Background accelerometer={accelerometer} />
      <Star accelerometer={accelerometer} />
      <Land waterHeight={WATER_HEIGHT} accelerometer={accelerometer} />
      <Water waterHeight={WATER_HEIGHT} accelerometer={accelerometer} />
      <Boat accelerometer={accelerometer} waterHeight={WATER_HEIGHT} />
    </SceneContainer>
  )
}
