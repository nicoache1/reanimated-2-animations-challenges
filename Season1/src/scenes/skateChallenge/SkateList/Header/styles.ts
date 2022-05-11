import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  backgroundAnimated: {
    backgroundColor: 'white',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    flexDirection: 'row',
    height: 60,
    left: 0,
    paddingHorizontal: 30,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  container: {
    flexDirection: 'row',
    height: 60,
    paddingHorizontal: 30,
  },
  headerLeft: {
    alignItems: 'flex-start',
    flex: 1,
    justifyContent: 'flex-start',
    zIndex: 2,
  },
  headerRight: {
    alignItems: 'flex-end',
    flex: 1,
    justifyContent: 'flex-start',
    zIndex: 2,
  },
})
