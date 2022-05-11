import { Image, useImage } from '@shopify/react-native-skia'
import React from 'react'
import { Dimensions } from 'react-native'

interface SkyImageProps {
  x: number
  y: number
}

const { width, height } = Dimensions.get('window')

export const SkyImage: React.FC<SkyImageProps> = ({ x, y }) => {
  const image = useImage(require('../../assets/images/sky.png'))

  if (!image) {
    return <></>
  }

  return (
    <Image
      image={image!}
      fit="cover"
      x={x}
      y={y}
      width={width}
      height={(height + 10) / 2}
    />
  )
}
