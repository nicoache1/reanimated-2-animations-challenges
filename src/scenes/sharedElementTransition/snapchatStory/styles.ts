import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  flexible: {
    flex: 1,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    height: undefined,
    width: undefined,
  },
})
