import { Dimensions, StyleSheet } from 'react-native'

const { width, height } = Dimensions.get('window')

export const styles = StyleSheet.create({
  buttonContainer: {
    height: 40,
  },
  container: {
    justifyContent: 'flex-end',
    width,
  },
  headerRow: {
    flexDirection: 'row',
  },
  headerSideContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  headerTitleContainer: {
    alignItems: 'center',
    flex: 5,
    justifyContent: 'center',
  },
  menuContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    padding: 20,
    position: 'absolute',
    right: 0,
    top: height / 5,
    width: width / 2,
  },
})
