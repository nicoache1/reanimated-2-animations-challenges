import NewYorkImage from 'src/assets/images/expandingCollection/newYork.jpg'
import SanFranciscoImage from 'src/assets/images/expandingCollection/sanFrancisco.jpg'
import TokyoImage from 'src/assets/images/expandingCollection/tokyo.jpg'

import { BaseItemList, ExpandingType } from './types'

export const items: BaseItemList[] = [
  {
    type: ExpandingType.SPACER,
  },
  {
    address: 'La Crescenta - Montrose, CA23123',
    id: '1',
    image: SanFranciscoImage,
    location: { latitude: 36, longitude: 97 },
    stars: 5,
    title: 'San Francisco',
    type: ExpandingType.ITEM,
  },
  {
    address: '4th Avenue - New York, NY12383',
    id: '2',
    image: NewYorkImage,
    location: { latitude: 36, longitude: 97 },
    stars: 4,
    title: 'New York',
    type: ExpandingType.ITEM,
  },
  {
    address: 'Samurai - Ikebukuro, IK90273',
    id: '3',
    image: TokyoImage,
    location: { latitude: 36, longitude: 97 },
    stars: 4,
    title: 'Tokyo',
    type: ExpandingType.ITEM,
  },
  {
    type: ExpandingType.SPACER,
  },
]
