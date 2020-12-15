import { StyleSheet } from 'react-native'

import { ITEM_HEIGHT } from '../types'

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    height: ITEM_HEIGHT,
    paddingHorizontal: 20,
  },
  labelContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  nameContainer: {
    flex: 5,
  },
})
