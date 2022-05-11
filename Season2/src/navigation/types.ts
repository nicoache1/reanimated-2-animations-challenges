import { ParamListBase } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'

import { Routes } from './routes'

export interface ParamList extends ParamListBase {
  [Routes.Home]: undefined
  [Routes.Glassmorphism]: undefined
  [Routes.GestureComposition]: undefined
  [Routes.GhostInterface]: undefined
  [Routes.GlassmorphismApplied]: undefined
  [Routes.Neumorphism]: undefined
  [Routes.NewGestures]: undefined
}

export type SceneProps<T extends keyof ParamList> = React.FC<
  NativeStackScreenProps<ParamList, T>
>

export type NavigationProp<T extends keyof ParamList> = NativeStackScreenProps<
  ParamList,
  T
>['navigation']
