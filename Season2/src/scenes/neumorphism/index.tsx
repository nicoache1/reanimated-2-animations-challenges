import React, { useLayoutEffect } from 'react'
import { Routes } from 'src/navigation/routes'
import { SceneProps } from 'src/navigation/types'

import { Neumorphism as Dashboard } from './Dashboard'

export const Neumorphism: SceneProps<Routes.Neumorphism> = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
    })
  }, [navigation])

  return <Dashboard />
}
