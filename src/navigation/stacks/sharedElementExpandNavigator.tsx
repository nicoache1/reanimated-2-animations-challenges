import React from 'react'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
import { ExpandingCollection } from 'src/scenes/expandingCollection'
import { ExpandingCollectionDetail } from 'src/scenes/expandingCollection/expandingCollectionDetail'

import { customModalTransition } from '../customTransitions'
import { Routes } from '../Routes'

const Stack = createSharedElementStackNavigator()

export const SharedElementExpandNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      cardOverlayEnabled: true,
      cardStyle: {
        backgroundColor: 'transparent',
      },
      gestureEnabled: false,
      headerShown: false,
      ...customModalTransition,
    }}>
    <Stack.Screen
      name={Routes.ExpandingCollection}
      component={ExpandingCollection}
    />
    <Stack.Screen
      name={Routes.ExpandingCollectionDetail}
      component={ExpandingCollectionDetail}
      sharedElements={(route) => {
        return [
          { id: route.params.item.id },
          {
            animation: 'fade',
            id: `sharedFooter.${route.params.item.id}`,
            resize: 'stretch',
          },
        ]
      }}
    />
  </Stack.Navigator>
)
