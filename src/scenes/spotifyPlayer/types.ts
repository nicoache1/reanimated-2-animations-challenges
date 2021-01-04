import { Dimensions, ImageSourcePropType } from 'react-native'

const { height } = Dimensions.get('window')
const φ = (1 + Math.sqrt(5)) / 2

export const MIN_HEADER_HEIGHT = 90
export const MAX_HEADER_HEIGHT = height * (1 - 1 / φ)
export const HEADER_DELTA = MAX_HEADER_HEIGHT - MIN_HEADER_HEIGHT

export interface TrackType {
  name: string
  artist?: string
}

export interface AlbumType {
  name: string
  artist: string
  release: number
  cover: ImageSourcePropType
  tracks: TrackType[]
}
