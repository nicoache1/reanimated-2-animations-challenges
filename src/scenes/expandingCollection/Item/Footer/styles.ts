import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    position: 'absolute',
    zIndex: 0,
  },
  favoriteContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  favoriteRow: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 35,
  },
  image: {
    borderRadius: 45 / 2,
    height: 45,
    width: 45,
  },
  subtitle: {
    color: 'gray',
    fontFamily: 'Ridley Grotesk',
  },
  subtitleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  thumbnail: {
    borderRadius: 45 / 2,
    height: 45,
    position: 'absolute',
    width: 45,
  },
  thumbnailContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 50,
  },
  title: {
    color: 'gray',
    fontFamily: 'Ridley Grotesk',
    fontSize: 14,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})
