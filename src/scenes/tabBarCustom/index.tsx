import React, { useCallback, useState } from 'react'
import { View } from 'react-native'

import { Item } from './Item'
import { items } from './items'
import { styles } from './styles'

export const TabBarCustom: React.FC<{}> = () => {
  const [active, setActive] = useState(1)

  const onPress = useCallback(
    (value: number) => () => {
      setActive(value)
    },
    [],
  )

  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        {items.map((value) => (
          <Item
            active={active === value.value}
            {...value}
            onPress={onPress(value.value)}
          />
        ))}
      </View>
    </View>
  )
}
