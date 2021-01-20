import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    backgroundColor: '#EBBE67',
    borderRadius: 50 / 2,
    height: 50,
    justifyContent: 'center',
    left: 20,
    shadowColor: '#000',
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    top: 20,
    width: 50,
  },
  icon: { ...StyleSheet.absoluteFillObject },
})
