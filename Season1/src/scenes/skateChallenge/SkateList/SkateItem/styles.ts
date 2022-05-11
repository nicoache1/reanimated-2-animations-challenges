import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    height: 200,
    justifyContent: 'center',
    paddingHorizontal: 25,
  },
  crestContainer: {
    alignItems: 'center',
    flex: 3,
    justifyContent: 'center',
  },
  crestShadow: {
    elevation: 13,
    shadowColor: '#000',
    shadowOffset: {
      height: 6,
      width: 0,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
  },
  name: {
    color: 'white',
    fontFamily: 'Ridley Grotesk',
    fontSize: 20,
  },
  nameContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  price: {
    color: 'white',
    fontFamily: 'Ridley Grotesk',
    fontSize: 20,
  },
  priceContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
})
