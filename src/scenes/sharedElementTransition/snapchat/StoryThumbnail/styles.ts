import { Dimensions, StyleSheet } from 'react-native'

const margin = 16
const borderRadius = 5
const width = Dimensions.get('window').width / 2 - margin * 2

export const styles = StyleSheet.create({
  container: {
    borderRadius,
    height: width * 1.77,
    marginTop: margin,
    width,
  },
  flexible: {
    flex: 1,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    borderRadius,
    height: undefined,
    resizeMode: 'cover',
    width: undefined,
  },
})
