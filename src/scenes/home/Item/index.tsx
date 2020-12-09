import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { styles } from './styles'

interface LayoutProps {
  label: String
  onPress: () => void
}

export const Item: React.FC<LayoutProps> = ({ label, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={styles.row}>
      <Text>{label}</Text>
    </View>
  </TouchableOpacity>
)
