import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { SceneContainer } from 'src/components/SceneContainer'

interface DragAndDropProps {}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
})

export const DragAndDrop: React.FC<DragAndDropProps> = ({}) => {
  return (
    <SceneContainer style={styles.container}>
      <Text>COMING SOON</Text>
    </SceneContainer>
  )
}
