import { NavigationContainerRef, ParamListBase } from '@react-navigation/native'
import * as React from 'react'

export const navigationRef: React.RefObject<NavigationContainerRef> = React.createRef()

export function navigate(name: string, params?: ParamListBase[string]) {
  navigationRef.current?.navigate(name, params)
}
