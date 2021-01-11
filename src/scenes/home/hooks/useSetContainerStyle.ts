import { useMemo } from 'react'
import { StyleProp, ViewStyle } from 'react-native'

export const useSetContainerStyle = () => {
  const containerStyle: StyleProp<ViewStyle> = useMemo(
    () => ({
      backgroundColor: 'transparent',
      padding: 0,
    }),
    [],
  )
  return {
    containerStyle,
  }
}
