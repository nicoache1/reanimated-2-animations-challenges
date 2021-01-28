import { Dimensions, StyleSheet } from 'react-native'

const { width } = Dimensions.get('window')

export const styles = StyleSheet.create({
  album: {
    backgroundColor: 'red',
    borderRadius: 10,
    height: width * 0.6,
    position: 'absolute',
    width: width * 0.6,
    zIndex: 3,
  },
  container: {
    alignItems: 'flex-start',
    flex: 3,
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  disc: {
    backgroundColor: 'black',
    borderRadius: 100,
    height: 200,
    position: 'absolute',
    width: 200,
    zIndex: 2,
  },
  shadow: {
    elevation: 7,
    shadowColor: '#000',
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6.0,
  },
})
