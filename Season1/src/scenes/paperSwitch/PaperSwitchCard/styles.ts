import { StyleSheet } from 'react-native'

export const RADIUS = 45
export const CARD_HEIGHT = 200

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: CARD_HEIGHT,
    justifyContent: 'center',
  },
  image: {
    height: 80,
    width: 80,
  },
  subsection: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
  },
  subtitleContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  switch: {
    borderColor: 'gray',
    borderRadius: 17,
    borderWidth: 0.5,
  },
  switchContainer: {
    alignItems: 'center',
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
})
