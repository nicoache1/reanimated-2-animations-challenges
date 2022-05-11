import { StyleSheet } from 'react-native'

import { ITEM_HEIGHT, ITEM_WIDTH, MARGIN_VERTICAL } from './constants'

export const styles = StyleSheet.create({
  album: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'red',
    borderRadius: 10,
    zIndex: 3,
  },
  albumContainer: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 3,
  },
  container: {
    alignItems: 'center',
    height: ITEM_HEIGHT,
    justifyContent: 'center',
    marginVertical: MARGIN_VERTICAL,
  },
  descriptionContainer: {
    flex: 1.5,
    justifyContent: 'flex-start',
  },
  disc: {
    zIndex: 2,
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'black',
    borderRadius: 35,
    height: 70,
    left: 45,
    top: 0,
    width: 70,
  },
  item: {
    backgroundColor: 'white',
    borderRadius: 16,
    height: ITEM_HEIGHT,
    paddingLeft: 100,
    width: ITEM_WIDTH,
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
  title: {
    fontFamily: 'Ridley Grotesk',
    fontSize: 20,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 5,
  },
})
