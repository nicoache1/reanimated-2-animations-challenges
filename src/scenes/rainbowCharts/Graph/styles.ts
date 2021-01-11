import { Dimensions, StyleSheet } from 'react-native'

import { graphs } from './graphsData'

const { width } = Dimensions.get('window')

export const SELECTION_WIDTH = width - 32
export const BUTTON_WIDTH = (width - 32) / graphs.length

export const styles = StyleSheet.create({
  backgroundSelection: {
    backgroundColor: '#f3f3f3',
    ...StyleSheet.absoluteFillObject,
    borderRadius: 8,
    width: BUTTON_WIDTH,
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  label: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  labelContainer: {
    padding: 16,
    width: BUTTON_WIDTH,
  },
  selection: {
    alignSelf: 'center',
    flexDirection: 'row',
    width: SELECTION_WIDTH,
  },
})
