import * as React from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import SafeAreaView, { ForceInsetProp } from 'react-native-safe-area-view'

import { styles } from './styles'

interface LayoutProps {
  forceInset: ForceInsetProp
  style?: StyleProp<ViewStyle>
  children: React.ReactNode
}

export const SceneContainer: React.FunctionComponent<LayoutProps> = ({
  forceInset,
  style,
  children,
}) => (
  <SafeAreaView style={[styles.container, style]} forceInset={forceInset}>
    {children}
  </SafeAreaView>
)
