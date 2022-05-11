import { Dimensions, StyleSheet } from 'react-native'

const { width, height } = Dimensions.get('window')

export const styles = StyleSheet.create({
  background: {
    height,
    width,
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    left: 20,
    position: 'absolute',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  sceneStyle: {
    paddingHorizontal: 20,
  },
  text: {
    color: 'white',
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    textAlign: 'center',
  },
})
