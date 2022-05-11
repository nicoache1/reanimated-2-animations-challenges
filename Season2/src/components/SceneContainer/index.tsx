import * as React from 'react'
import { StatusBar, StatusBarProps, StyleProp, ViewStyle } from 'react-native'
import { Edge, SafeAreaView } from 'react-native-safe-area-context'

import { styles } from './styles'

interface LayoutProps {
  edges?: ReadonlyArray<Edge>
  style?: StyleProp<ViewStyle>
  children: React.ReactNode
  barStyle?: StatusBarProps['barStyle']
}

export const SceneContainer: React.FunctionComponent<LayoutProps> = ({
  edges = ['bottom'],
  style,
  children,
  barStyle = 'default',
}) => {
  return (
    <SafeAreaView style={[styles.container, style]} edges={edges}>
      <StatusBar barStyle={barStyle} animated={true} />
      {children}
    </SafeAreaView>
  )
}
