import { Dimensions, StyleSheet } from 'react-native'

const { height } = Dimensions.get('window')

export const styles = StyleSheet.create({
  circle: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: -20,
    top: height / 5,
  },
  container: {
    flex: 1,
  },
  footer: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    bottom: height / 25,
    height: height / 10,
    justifyContent: 'flex-start',
    left: 0,
    position: 'absolute',
    right: 0,
  },
  header: {
    backgroundColor: 'transparent',
    flex: 0.2,
  },
  slider: {
    backgroundColor: 'transparent',
    height: height,
  },
  sliderContainer: {
    flex: 1,
    flexDirection: 'row',
  },
})
