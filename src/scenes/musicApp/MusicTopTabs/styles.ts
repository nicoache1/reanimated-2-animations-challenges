import { StyleSheet } from 'react-native'

import { ITEM_SIZE, PADDING_HORIZONTAL } from '../constants'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
  },
  slider: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgb(211,	113,	146)',
    height: 5,
    left: 30,
    top: 60,
    width: ITEM_SIZE - PADDING_HORIZONTAL * 2,
    zIndex: 4,
  },
  tabContainer: {
    flexDirection: 'row',
    height: 60,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  tabsContent: {
    flex: 1,
    flexDirection: 'row',
  },
})
