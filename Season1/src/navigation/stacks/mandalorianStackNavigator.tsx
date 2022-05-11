import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { About } from 'src/scenes/mandalorian/about'

import { Routes } from '../Routes'

const Stack = createStackNavigator()

export const MandalorianStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name={Routes.MandalorianAbout} component={About} />
  </Stack.Navigator>
)
