import { Dimensions, StyleSheet } from 'react-native'

const { width } = Dimensions.get('window')

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    width,
  },
  subtitle: {
    color: '#FFFFFF',
    fontFamily: 'Ridley Grotesk',
    fontSize: 30,
  },
  title: {
    color: '#142664',
    fontFamily: 'Ridley Grotesk Bold',
    fontSize: 62,
  },
  vector: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
})
