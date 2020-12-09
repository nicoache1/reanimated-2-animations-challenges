import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
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
    </Stack.Navigator>
  )
}
