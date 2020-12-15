import React from 'react'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
import { Snapchat } from 'src/scenes/sharedElementTransition/snapchat'
import { SnapchatStory } from 'src/scenes/sharedElementTransition/snapchatStory'

import { Routes } from '../Routes'

const Stack = createSharedElementStackNavigator()
export const SharedElementStackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      cardOverlayEnabled: true,
      cardStyle: {
        backgroundColor: 'transparent',
      },
      gestureEnabled: false,
      headerShown: false,
    }}>
    <Stack.Screen name={Routes.Snapchat} component={Snapchat} />
    <Stack.Screen
      name={Routes.SnapchatStory}
      component={SnapchatStory}
      sharedElements={(route) => {
        return [route.params.story.id]
      }}
    />
  </Stack.Navigator>
)
