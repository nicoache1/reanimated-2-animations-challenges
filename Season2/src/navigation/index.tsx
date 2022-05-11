import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { DragAndDrop } from 'src/scenes/dragAndDrop'
import { DragToDelete } from 'src/scenes/dragToDelete'
import { GestureComposition } from 'src/scenes/gestureComposition'
import { GhostInterface } from 'src/scenes/ghostInterface'
import { Glassmorphism } from 'src/scenes/glassmorphism'
import { Home } from 'src/scenes/home'
import { Neumorphism } from 'src/scenes/neumorphism'

import { Routes } from './routes'
import { ParamList } from './types'

const Stack = createNativeStackNavigator<ParamList>()

export const AppNavigator: React.FC<{}> = () => (
  <Stack.Navigator>
    <Stack.Screen name={Routes.Home} component={Home} />
    <Stack.Screen name={Routes.Glassmorphism} component={Glassmorphism} />
    <Stack.Screen name={Routes.NewGestures} component={DragAndDrop} />
    <Stack.Screen
      name={Routes.GestureComposition}
      component={GestureComposition}
    />
    <Stack.Screen name={Routes.GhostInterface} component={GhostInterface} />
    <Stack.Screen name={Routes.Neumorphism} component={Neumorphism} />
    <Stack.Screen name={Routes.DragToDelete} component={DragToDelete} />
  </Stack.Navigator>
)
