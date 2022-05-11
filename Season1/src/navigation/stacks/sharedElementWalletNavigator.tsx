import React from 'react'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
import { Wallet } from 'src/scenes/wallet'
import { WalletDetails } from 'src/scenes/wallet/WalletDetails'

import { customModalTransition } from '../customTransitions'
import { Routes } from '../Routes'

const Stack = createSharedElementStackNavigator()
export const SharedElementWalletNavigator = () => (
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
    <Stack.Screen name={Routes.Wallet} component={Wallet} />
    <Stack.Screen
      name={Routes.WalletDetail}
      component={WalletDetails}
      sharedElements={(route) => {
        return [route.params.wallet.id]
      }}
    />
  </Stack.Navigator>
)
