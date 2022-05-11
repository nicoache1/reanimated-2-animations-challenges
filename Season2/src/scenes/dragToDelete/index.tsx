import { useHeaderHeight } from '@react-navigation/elements'
import { cloneDeep } from 'lodash'
import React, { useState } from 'react'
import { Dimensions, StyleSheet, Text } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated'
import { mix } from 'react-native-redash'
import { SceneContainer } from 'src/components/SceneContainer'
import { Routes } from 'src/navigation/routes'
import { SceneProps } from 'src/navigation/types'

import { DELETE_ZONE_HEIGHT, ITEM_HEIGHT, MOCKED_DATA } from './constants'
import { Item } from './Item'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  deleteZone: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopColor: 'black',
    borderTopWidth: 1,
    height: DELETE_ZONE_HEIGHT,
    justifyContent: 'center',
    position: 'absolute',
    width,
    zIndex: 90,
  },
})

const getContentSpace = (mockedData: any[]) => {
  'worklet'
  const contentSpace = mockedData.length * ITEM_HEIGHT + mockedData.length * 10
  return contentSpace >= height ? contentSpace : height
}

export const DragToDelete: SceneProps<Routes.DragToDelete> = ({}) => {
  const active = useSharedValue(-1)
  const headerHeight = useHeaderHeight()
  const [mockedData, setMockedData] = useState(MOCKED_DATA)

  const derivedValue = useDerivedValue(() => {
    return active.value === -1 ? 0 : 1
  }, [])

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: mix(
            derivedValue.value,
            getContentSpace(mockedData) + DELETE_ZONE_HEIGHT,
            height - DELETE_ZONE_HEIGHT - headerHeight,
          ),
        },
      ],
    }
  })

  const onDragEnd = (index: number) => {
    setMockedData(prevData => {
      const newArray = cloneDeep(prevData)
      newArray.splice(index, 1)
      return newArray
    })
  }

  return (
    <SceneContainer style={styles.container}>
      <Animated.ScrollView removeClippedSubviews={false}>
        {mockedData.map((item, index) => (
          <Item
            item={item}
            key={item}
            index={index}
            active={active}
            onDragEnd={onDragEnd}
          />
        ))}
        <Animated.View style={[styles.deleteZone, animatedStyle]}>
          <Text>Drag Here to delete</Text>
        </Animated.View>
      </Animated.ScrollView>
    </SceneContainer>
  )
}
