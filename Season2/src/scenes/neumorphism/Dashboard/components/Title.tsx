import { Group, Text, useFont } from '@shopify/react-native-skia'
import React from 'react'

import { Button, BUTTON_SIZE } from './Button'
import { ChervronLeft } from './icons/ChevronLeft'
import { Cog } from './icons/Cog'

interface Title {
  title: string
}

export const Title: React.FC<Title> = ({ title }) => {
  const font = useFont(require('./SF-Pro-Display-Bold.otf'), 28)
  if (!font) {
    return null
  }
  const pos = font.measureText(title)
  const offsetX = 30 + BUTTON_SIZE
  const space = 298 - offsetX
  return (
    <Group transform={[{ translateY: 64 }]}>
      <Button x={30} y={0}>
        <ChervronLeft />
      </Button>
      <Text
        text={title}
        x={offsetX + (space - pos.width) / 2}
        y={BUTTON_SIZE - pos.height}
        font={font}
        color="white"
      />
      <Button x={298} y={0}>
        <Cog />
      </Button>
    </Group>
  )
}
