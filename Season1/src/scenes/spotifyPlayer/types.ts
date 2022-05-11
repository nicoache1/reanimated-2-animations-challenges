import { Dimensions, ImageSourcePropType } from 'react-native'
import { getBottomSpace } from 'react-native-iphone-x-helper'

const { height } = Dimensions.get('window')
const φ = (1 + Math.sqrt(5)) / 2

export const MIN_HEADER_HEIGHT = 90
export const MAX_HEADER_HEIGHT = height * (1 - 1 / φ)
export const HEADER_DELTA = MAX_HEADER_HEIGHT - MIN_HEADER_HEIGHT

export const TABBAR_HEIGHT = getBottomSpace() + 60
export const MINIMIZED_PLAYER_HEIGHT = 65
export const SNAP_TOP = 0
export const SNAP_BOTTOM = height - TABBAR_HEIGHT - MINIMIZED_PLAYER_HEIGHT

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
