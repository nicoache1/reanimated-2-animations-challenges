import React from 'react'
import { Text, TouchableWithoutFeedback, View } from 'react-native'

import { styles } from './styles'

export const ShufflePlay: React.FC<{}> = () => (
  <TouchableWithoutFeedback>
    <View style={styles.button}>
      <Text style={styles.label}>SHUFFLE PLAY</Text>
    </View>
  </TouchableWithoutFeedback>
)
