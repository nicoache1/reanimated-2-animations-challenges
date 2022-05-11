import { StyleSheet } from 'react-native'

import { BUTTON_HEIGHT } from '../ShufflePlay/styles'
import { MIN_HEADER_HEIGHT } from '../types'

export const styles = StyleSheet.create({
  SuffleContainer: {
    left: 0,
    position: 'absolute',
    right: 0,
    top: MIN_HEADER_HEIGHT - BUTTON_HEIGHT / 2,
  },
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
})
