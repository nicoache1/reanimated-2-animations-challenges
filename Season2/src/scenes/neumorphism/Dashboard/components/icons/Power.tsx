import { Group, Line, Path, vec } from '@shopify/react-native-skia'
import React from 'react'

export const Power = () => {
  return (
    <Group style="stroke" strokeWidth={2} strokeCap="round" strokeJoin="round">
      <Path path="M18.36 6.64a9 9 0 1 1-12.73 0" />
      <Line p1={vec(12, 2)} p2={vec(12, 12)} />
    </Group>
  )
}
