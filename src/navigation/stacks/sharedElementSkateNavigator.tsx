import React from 'react'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
import { SkateDetail } from 'src/scenes/skateChallenge/SkateDetail'
import { SkateChallenge } from 'src/scenes/skateChallenge/SkateList'

import { Routes } from '../Routes'

const Stack = createSharedElementStackNavigator()

const opacityTransition: object = {
  cardStyleInterpolator: ({ current }: { current: { progress: number } }) => ({
    cardStyle: {
      opacity: current.progress,
    }, // updates the opacity depending on the transition progress value of the current screen
  }), // we will swipe right if we want to close the screen;
  gestureDirection: 'horizontal',
  transitionSpec: {
    close: {
      animation: 'timing',
      config: {
        duration: 1000,
      },
    },
    open: {
      animation: 'timing',
    },
  },
}

export const SharedElementSkateNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      cardOverlayEnabled: true,
      cardStyle: {
        backgroundColor: 'transparent',
      },
      gestureEnabled: false,
      headerShown: false,
      ...opacityTransition,
    }}>
    <Stack.Screen name={Routes.Skates} component={SkateChallenge} />
    <Stack.Screen
      name={Routes.SkateDetail}
      component={SkateDetail}
      sharedElements={(route) => {
        return [route.params.skate.id]
      }}
    />
  </Stack.Navigator>
)
