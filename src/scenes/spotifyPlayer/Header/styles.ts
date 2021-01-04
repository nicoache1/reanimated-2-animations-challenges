import { StyleSheet } from 'react-native'

import { MIN_HEADER_HEIGHT } from '../types'

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'rgb(74, 67, 56)',
    height: MIN_HEADER_HEIGHT,
    justifyContent: 'center',
    left: 0,
    paddingTop: 20,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  titleContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingTop: 20,
  },
})
