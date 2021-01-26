import { StyleSheet } from 'react-native'

import { ITEM_SIZE, SPACING } from '../constants'

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: SPACING,
    padding: SPACING * 2,
    width: ITEM_SIZE,
  },
  image: {
    height: 350,
    width: ITEM_SIZE,
  },
  imageContainer: {
    elevation: 9,
    shadowColor: '#000',
    shadowOffset: {
      height: 4,
      width: 0,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
  },
})
