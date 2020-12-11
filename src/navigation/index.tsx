import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { CircularProgress } from 'src/scenes/circularProgress'
import { Home } from 'src/scenes/home'
import { PanGesture } from 'src/scenes/panGesture'
import { AnimatedStyleUpdateExample } from 'src/scenes/start/AnimatedStyleUpdateExample'

import { Routes } from './Routes'

const Stack = createStackNavigator()

export const AppContainer: React.FC<{}> = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen
        name={Routes.RN2StartExample}
        component={AnimatedStyleUpdateExample}
      />
      <Stack.Screen name={Routes.PanGesture} component={PanGesture} />
      <Stack.Screen
        name={Routes.CircularProgress}
        component={CircularProgress}
      />
    </Stack.Navigator>
  )
}
