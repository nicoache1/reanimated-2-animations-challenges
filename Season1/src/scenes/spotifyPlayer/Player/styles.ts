import { Dimensions, StyleSheet } from 'react-native'

const { width } = Dimensions.get('window')

export const styles = StyleSheet.create({
  artist: {
    color: 'white',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  container: {
    margin: 16,
  },
  controls: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  cover: {
    height: width - 32,
    marginVertical: 16,
    width: width - 32,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  metadata: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  root: {
    flex: 1,
  },
  slider: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 2,
    height: 4,
    marginVertical: 16,
    width: width - 32,
  },
  song: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
  },
  title: {
    color: 'white',
    padding: 16,
  },
})
