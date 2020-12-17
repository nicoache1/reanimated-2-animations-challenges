import { Dimensions, StyleSheet } from 'react-native'

const { width } = Dimensions.get('window')

export const styles = StyleSheet.create({
  headerContainer: {
    flex: 1.5,
    flexDirection: 'row',
    zIndex: 7,
  },
  headerLeft: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    width: width / 3,
  },
  headerTitle: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Ridley Grotesk',
    fontSize: 32,
  },
})
