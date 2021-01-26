import { ImageSourcePropType } from 'react-native'

// eslint-disable-next-line no-shadow
export enum ExpandingType {
  SPACER = 0,
  ITEM = 1,
}

interface BaseItem {
  type: ExpandingType
}

export interface ExpandingItem extends BaseItem {
  location: Point
  title: string
  address: string
  image: ImageSourcePropType
  stars: number
  id: string
}

export interface SpacerItem extends BaseItem {}

export type BaseItemList = SpacerItem | ExpandingItem

interface Point {
  latitude: number
  longitude: number
}
