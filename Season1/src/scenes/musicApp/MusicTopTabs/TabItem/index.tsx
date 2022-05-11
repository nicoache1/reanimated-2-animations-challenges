import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

interface TabItemProps {
  onPress: () => void
  title: string
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
  },
})

export const TabItem: React.FC<TabItemProps> = ({ onPress, title }) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text>{title}</Text>
    </Pressable>
  )
}
