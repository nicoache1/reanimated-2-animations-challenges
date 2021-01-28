import { Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

export const ITEM_SIZE = width / 3
export const PADDING_HORIZONTAL = 20

export const tabs = ['Louise Gonzales', 'Stella Wagner', 'Lewis Austin']
export const sliderSnapPoints = tabs.map(
  (_, index) => ITEM_SIZE * index - (PADDING_HORIZONTAL / 2) * index,
)
export const snapPoints = tabs.map((_, index) => width * index)

export const colors = ['red', 'green', 'blue']
