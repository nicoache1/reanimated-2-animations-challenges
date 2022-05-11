import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  pointer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
    top: -2,
  },
  track: {
    borderRadius: 20,
    height: 40,
    width: 100,
  },
})
