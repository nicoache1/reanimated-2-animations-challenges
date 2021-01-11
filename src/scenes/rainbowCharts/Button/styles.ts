import { Dimensions, StyleSheet } from 'react-native'

const width = (Dimensions.get('window').width - 64) / 2

export const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    backgroundColor: 'black',
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 16,
    width: width,
  },
  icon: {
    marginRight: 8,
  },
  label: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
})
