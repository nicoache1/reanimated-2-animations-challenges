import { StyleSheet } from 'react-native'

const absoluteFill = StyleSheet.absoluteFillObject

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    ...absoluteFill,
  },
})
