import { Dimensions, Platform } from 'react-native'

const { width } = Dimensions.get('window')

export const perspective = width
export const angle = Math.atan(perspective / (width / 2))
export const ratio = Platform.OS === 'ios' ? 2 : 1.2
export const ITEM_WIDTH = width * 0.8
export const ITEM_HEIGHT = 120
export const MARGIN_VERTICAL = 20
