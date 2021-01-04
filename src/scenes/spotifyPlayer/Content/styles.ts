import { StyleSheet } from 'react-native'

import { MAX_HEADER_HEIGHT } from '../types'

export const styles = StyleSheet.create({
  artist: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  artistContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
  },
  gradient: {
    alignItems: 'center',
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
  },
  header: {
    height: MAX_HEADER_HEIGHT,
  },
  tracks: {
    backgroundColor: 'black',
    paddingTop: 32,
  },
})
