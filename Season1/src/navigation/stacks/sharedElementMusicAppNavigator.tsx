import React from 'react'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
import { MusicPlayer } from 'src/scenes/musicApp/MusicPlayer'
import { MusicTopTabs } from 'src/scenes/musicApp/MusicTopTabs'

import { customModalTransition } from '../customTransitions'
import { Routes } from '../Routes'

const Stack = createSharedElementStackNavigator()

export const SharedElementMusicAppNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      cardOverlayEnabled: true,
      cardStyle: {
        backgroundColor: 'transparent',
      },
      gestureEnabled: false,
      ...customModalTransition,
    }}>
    <Stack.Screen
      name={Routes.MusicTopTabs}
      component={MusicTopTabs}
      options={{ headerShown: true }}
    />
    <Stack.Screen
      name={Routes.MusicPlayer}
      component={MusicPlayer}
      options={{ headerShown: true }}
      sharedElements={(route) => {
        return [route.params.song.id]
      }}
    />
  </Stack.Navigator>
)
