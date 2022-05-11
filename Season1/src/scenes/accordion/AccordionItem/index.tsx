import React, { useMemo } from 'react'
import { Text, View } from 'react-native'

import { GoatPlayers } from '../types'
import { styles } from './styles'

interface LayoutProps extends GoatPlayers {
  isLast: boolean
}

export const AccordionItem: React.FC<LayoutProps> = ({ name, age, isLast }) => {
  const borderStyle = useMemo(
    () => ({
      borderBottomLeftRadius: isLast ? 10 : 0,
      borderBottomRightRadius: isLast ? 10 : 0,
    }),
    [isLast],
  )
  return (
    <View style={[styles.container, borderStyle]}>
      <View style={styles.nameContainer}>
        <Text>{name}</Text>
      </View>
      <View style={styles.labelContainer}>
        <Text>{age}</Text>
      </View>
    </View>
  )
}
