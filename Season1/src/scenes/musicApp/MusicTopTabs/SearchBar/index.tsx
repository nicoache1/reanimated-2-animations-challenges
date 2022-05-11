import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Search from 'src/assets/images/customTabBar/search.svg'

interface SearchBarProps {}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 16,
    elevation: 7,
    flexDirection: 'row',
    height: 80,
    justifyContent: 'center',
    marginHorizontal: 20,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6.0,
  },
  label: {
    color: 'gray',
    fontFamily: 'Ridley Grotesk',
    fontSize: 18,
  },
  labelContainer: {
    flex: 4,
  },
})

export const SearchBar: React.FC<SearchBarProps> = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Search your love music?</Text>
      </View>
      <View>
        <Search stroke={'black'} />
      </View>
    </View>
  )
}
