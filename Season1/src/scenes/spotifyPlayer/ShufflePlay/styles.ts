import { StyleSheet } from 'react-native'

export const BUTTON_HEIGHT = 48
export const BUTTON_WIDTH = 200

export const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    backgroundColor: '#1ed760',
    borderRadius: 32,
    height: BUTTON_HEIGHT,
    justifyContent: 'center',
    width: BUTTON_WIDTH,
  },
  label: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
})
