import { StyleSheet } from 'react-native'

export const CURSOR = 50

export const styles = StyleSheet.create({
  cursor: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: CURSOR / 2,
    height: CURSOR,
    justifyContent: 'center',
    width: CURSOR,
  },
  cursorBody: {
    backgroundColor: 'black',
    borderRadius: 7.5,
    height: 15,
    width: 15,
  },
})
