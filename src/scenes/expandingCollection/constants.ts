import { Dimensions } from 'react-native'
import user1Photo from 'src/assets/images/expandingCollection/user1.jpg'
import user2Photo from 'src/assets/images/expandingCollection/user2.jpg'
import user3Photo from 'src/assets/images/expandingCollection/user3.jpg'
import user4Photo from 'src/assets/images/expandingCollection/user4.jpg'
import user5Photo from 'src/assets/images/expandingCollection/user5.jpg'
import user6Photo from 'src/assets/images/expandingCollection/user6.jpg'

import { items } from './items'
import { ExpandingType } from './types'

const { width } = Dimensions.get('window')

export const SPACING = 25
export const ITEM_SIZE = width * 0.6
export const SPACER_SIZE = (width - ITEM_SIZE - SPACING * 2) / 2

export const snapPoints = items
  .filter((item) => item.type !== ExpandingType.SPACER)
  .map((_, index) => (SPACER_SIZE + ITEM_SIZE + SPACING) * -index)

export const userPhotos = [
  user1Photo,
  user2Photo,
  user3Photo,
  user4Photo,
  user5Photo,
  user6Photo,
]
