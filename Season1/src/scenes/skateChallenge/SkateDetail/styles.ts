import { Dimensions, StyleSheet } from 'react-native'

const { width, height } = Dimensions.get('window')

export const styles = StyleSheet.create({
  background: {
    ...StyleSheet.absoluteFillObject,

    zIndex: 2,
  },
  body: {
    flex: 6,
    flexDirection: 'row',
    zIndex: 7,
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  crest: {
    left: width / 10,
    position: 'absolute',
    top: height / 2,
    zIndex: 3,
  },
  descriptionContainer: {
    flex: 2,
    paddingHorizontal: 40,
  },
  flexible: {
    flex: 1,
  },
  offsetView: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    width: width / 2,
  },
  separator: {
    backgroundColor: '#B8B0B0',
    height: 1,
    marginHorizontal: 40,
  },
  subtitle: {
    fontFamily: 'Ridley Grotesk',
    fontSize: 22,
  },
})
