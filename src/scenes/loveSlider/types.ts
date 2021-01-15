import { Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

export const HEART_WIDTH = 55
export const HORIZONTAL_PADDING = 30
export const NORMALIZED_WIDTH = width - HORIZONTAL_PADDING * 2
