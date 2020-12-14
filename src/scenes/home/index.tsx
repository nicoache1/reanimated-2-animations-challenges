import React, { useCallback, useMemo } from 'react'
import { FlatList, ListRenderItemInfo, View } from 'react-native'
import { Routes } from 'src/navigation/Routes'

import { Item } from './Item'
import { Separator } from './Separator'
import { styles } from './styles'
import { ExampleItem } from './types'

export const Home: React.FC<{}> = ({ navigation }: any) => {
  const examples: ExampleItem[] = useMemo(
    () => [
      { name: 'Reanimated 2 start example', route: Routes.RN2StartExample },
      { name: 'Pan gesture', route: Routes.PanGesture },
      { name: 'Circular progress - AKA toggl', route: Routes.CircularProgress },
      {
        name: 'Reflectly color selection',
        route: Routes.ReflectlyColorSelection,
      },
    ],
    [],
  )

  const onPress = useCallback(
    (route: Routes) => () => {
      navigation.push(route)
    },
    [navigation],
  )

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<ExampleItem>) => (
      <Item label={item.name} onPress={onPress(item.route)} />
    ),
    [onPress],
  )

  return (
    <View style={styles.container}>
      <FlatList
        data={examples}
        renderItem={renderItem}
        ItemSeparatorComponent={Separator}
      />
    </View>
  )
}
