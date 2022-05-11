import { Dimensions, StyleSheet } from 'react-native'

import { MAX_HEIGHT, MIN_HEIGHT } from './types'

const { width } = Dimensions.get('window')

export const styles = StyleSheet.create({
  container: {
    height: MIN_HEIGHT,
    justifyContent: 'flex-end',
    width,
  },
  mainTitle: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    padding: 32,
    transform: [{ translateY: 64 }],
  },
  subtitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    color: 'white',
    fontSize: 32,
    fontWeight: '500',
    textAlign: 'center',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    maxHeight: MAX_HEIGHT * 0.61,
  },
})
