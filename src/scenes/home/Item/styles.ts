import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(244,244,244)',
    borderRadius: 8,
    elevation: 6,
    height: 100,
    marginHorizontal: 30,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      height: 3,
      width: 0,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
  },
  row: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  text: {
    color: '#000',
    fontFamily: 'Ridley Grotesk',
    fontSize: 18,
  },
})
