import { Dimensions, StyleSheet } from 'react-native'

const { width, height } = Dimensions.get('window')

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
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
  text: {
    color: 'gray',
    fontFamily: 'Ridley Grotesk',
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    width,
  },
  track: {
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 0.2,
    height: 20,
    left: width * 0.35,
    position: 'absolute',
    top: height / 35,
    width: 20,
  },
})
