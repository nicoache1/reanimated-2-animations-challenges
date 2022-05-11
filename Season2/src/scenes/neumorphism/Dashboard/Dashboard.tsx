import {
  Canvas,
  Fill,
  fitRects,
  Group,
  LinearGradient,
  mix,
  rect,
  rect2rect,
  runSpring,
  useDerivedValue,
  useFont,
  useLoop,
  useTouchHandler,
  useValue,
  vec,
} from '@shopify/react-native-skia'
import React from 'react'
import { Dimensions } from 'react-native'

import { Control } from './components/Control'
import { Power } from './components/icons/Power'
import { Snow } from './components/icons/Snow'
import { Sun } from './components/icons/Sun'
import { Wind } from './components/icons/Wind'
import { Mode } from './components/Mode'
import { ProgressBar } from './components/ProgressBar'

const window = Dimensions.get('window')
const width = 390
const height = 844
const src = rect(0, 0, width, height)
const dst = rect(0, 0, window.width, window.height)
const rects = fitRects('cover', src, dst)
const transform = rect2rect(rects.src, rects.dst)

export const Neumorphism = () => {
  const font = useFont(require('./components/SF-Pro-Display-Bold.otf'), 17)

  const translateY = useValue(100)
  const offsetY = useValue(0)

  const t = useLoop({ duration: 3000 })
  const x = useDerivedValue(() => mix(t.current, 0, 180), [t])

  const progress = useDerivedValue(() => x.current / 192, [x])

  const ac = useValue(170 / 192)
  const fan = useValue(70 / 192)
  const heat = useValue(90 / 192)
  const auto = useValue(20 / 192)

  const onTouch = useTouchHandler({
    onActive: pt => {
      translateY.current = offsetY.current + pt.y
    },
    onEnd: () => {
      runSpring(translateY, 100)
    },
    onStart: pt => {
      offsetY.current = translateY.current - pt.y
    },
  })
  if (!font) {
    return null
  }
  return (
    <Canvas style={{ flex: 1 }} mode="continuous" onTouch={onTouch}>
      <Fill>
        <LinearGradient
          start={vec(0, height / 4)}
          end={vec(0, height)}
          colors={['#101113', '#1E2023', '#2B2F33']}
        />
      </Fill>
      <Group transform={transform}>
        <ProgressBar progress={progress} />
        <Control
          x={0}
          y={464}
          label="Ac"
          active={true}
          progress={ac}
          font={font}>
          <Snow />
        </Control>
        <Control x={0} y={464 + 75} label="Fan" font={font} progress={fan}>
          <Wind />
        </Control>
        <Control x={0} y={464 + 140} label="Heat" font={font} progress={heat}>
          <Sun />
        </Control>
        <Control
          x={0}
          y={464 + 140 + 75}
          label="Auto"
          font={font}
          progress={auto}>
          <Power />
        </Control>
        <Mode translateY={translateY} />
      </Group>
    </Canvas>
  )
}
