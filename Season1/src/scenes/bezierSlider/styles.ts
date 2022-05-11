import { Dimensions, StyleSheet } from 'react-native'

import { DOT_SIZE } from './constants'

const { height } = Dimensions.get('window')

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  dot: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'black',
    borderRadius: 10,
    height: DOT_SIZE,
    top: 40,
    width: DOT_SIZE,
  },
  label: {
    fontFamily: 'Ridley Grotesk',
    fontSize: 16,
  },
  leftLabel: {
    left: 5,
    position: 'absolute',
    top: 70,
  },
  rightLabel: {
    position: 'absolute',
    right: 5,
    top: 70,
  },
  value: {
    color: 'white',
    fontFamily: 'Ridley Grotesk',
    fontSize: 28,
  },
  valueContainer: {
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 10,
    elevation: 5,
    height: 70,
    justifyContent: 'center',
    left: -28,
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    top: -height / 12,
    width: 70,
  },
})
