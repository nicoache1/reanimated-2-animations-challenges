import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'

interface indexProps {
  onPress: () => void
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    backgroundColor: '#FFBD18',
    borderRadius: 2,
    flex: 1,
    margin: 14,
  },
  container: {
    backgroundColor: '#fff',
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
    borderTopColor: '#BDC2C9',
    borderTopWidth: StyleSheet.hairlineWidth,
    flex: 1,
  },
})

export const FinalBackface: React.FC<indexProps> = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableHighlight style={styles.button} onPress={onPress}>
          <Text>PRESS ME</Text>
        </TouchableHighlight>
      </View>
    </View>
  )
}
