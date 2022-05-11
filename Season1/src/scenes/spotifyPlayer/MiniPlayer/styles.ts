import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  artistName: {
    color: 'white',
    fontWeight: '600',
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#272829',
    flexDirection: 'row',
    height: 65,
  },
  image: {
    height: 65,
    resizeMode: 'contain',
    width: 65,
  },
  imageContainer: {
    flex: 1,
  },
  playContainer: {
    alignItems: 'flex-end',
    flex: 1,
    paddingHorizontal: 20,
  },
  songInfoContainer: {
    flex: 3,
  },
  songName: {
    color: 'white',
  },
})
