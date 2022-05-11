import React from 'react'
import { View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { styles } from './styles'
import { LayoutProps } from './types'

export const HeaderButton: React.FunctionComponent<LayoutProps> = ({
  onPress,
  children,
}) => {
  return (
    <View style={styles.flexible}>
      <TouchableOpacity
        style={styles.content}
        onPress={onPress}
        hitSlop={{ bottom: 15, left: 15, right: 15, top: 15 }}>
        {children}
      </TouchableOpacity>
    </View>
  )
}
