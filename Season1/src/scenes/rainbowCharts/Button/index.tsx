import React from 'react'
import { Text, TouchableWithoutFeedback, View } from 'react-native'

import { styles } from './styles'

interface ButtonProps {
  icon: string
  label: string
}

export const Button: React.FC<ButtonProps> = ({ label }) => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}
