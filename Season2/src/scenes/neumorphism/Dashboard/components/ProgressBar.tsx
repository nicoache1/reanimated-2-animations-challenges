import type { SkiaReadonlyValue } from '@shopify/react-native-skia'
import {
  Box,
  BoxShadow,
  Circle,
  Group,
  LinearGradient,
  Path,
  rect,
  rrect,
  Skia,
  SweepGradient,
  Text,
  translate,
  useDerivedValue,
  useFont,
  vec,
} from '@shopify/react-native-skia'
import React from 'react'

const r1 = 85
const r2 = 60
const path = Skia.Path.Make()
path.addCircle(12 + r1, 12 + r1, r1)
const c = vec(12 + r1, 12 + r1)

const fromCircle = (cx: number, cy: number, r: number) =>
  rrect(rect(cx - r, cy - r, 2 * r, 2 * r), r, r)

interface ProgressBarProps {
  progress: SkiaReadonlyValue<number>
}

const colors = ['#2FB8FF', '#9EECD9']

export const ProgressBar = ({ progress }: ProgressBarProps) => {
  const font = useFont(require('./SF-Mono-Semibold.otf'), 32)
  const text = useDerivedValue(
    () => `${Math.round(progress.current * 100)}°C`,
    [progress],
  )
  if (font === null) {
    return null
  }
  const pos = font.measureText('00°C')

  return (
    <Group transform={translate({ x: 100, y: 223 })}>
      <Box box={fromCircle(12 + r1, 12 + r1, r1)}>
        <LinearGradient
          start={vec(12, 12)}
          end={vec(12 + r1, 12 + r1)}
          colors={['#000', '#2B2F33']}
        />
        <BoxShadow dx={18} dy={18} blur={80} color="#141415" />
        <BoxShadow dx={-18} dy={-18} blur={60} color="#485057" />
      </Box>
      <Box box={fromCircle(37 + r2, 37 + r2, r2)} color="rgba(59, 68, 81, 0.5)">
        <BoxShadow
          dx={-25}
          dy={-25}
          blur={60}
          color="rgba(59, 68, 81, 0.5)"
          inner
        />
        <BoxShadow
          dx={25}
          dy={25}
          blur={80}
          color="rgba(0, 0, 0, 0.45)"
          inner
        />
      </Box>
      <Text
        x={c.x - pos.width / 2}
        y={c.y + pos.height / 2}
        font={font}
        text={text}
        color="white"
      />
      <Group>
        <Path
          path={path}
          style="stroke"
          strokeWidth={15}
          end={progress}
          strokeCap="round">
          <SweepGradient c={vec(12 + r1, 12 + r1)} colors={colors} />
        </Path>
        <Circle cx={12 + 2 * r1} cy={12 + r1} r={15 / 2} color={colors[0]} />
      </Group>
    </Group>
  )
}
