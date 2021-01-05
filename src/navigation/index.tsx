import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { AccordionList } from 'src/scenes/accordion'
import { CircularProgress } from 'src/scenes/circularProgress'
import { CustomOnboarding } from 'src/scenes/customOnboarding'
import { Home } from 'src/scenes/home'
import { PanGesture } from 'src/scenes/panGesture'
import { ReflectlyColorSelection } from 'src/scenes/reflectlyColorSelection'
import { SpotifyPlayer } from 'src/scenes/spotifyPlayer'
import { AnimatedStyleUpdateExample } from 'src/scenes/start/AnimatedStyleUpdateExample'
import { StickyShapes } from 'src/scenes/stickyShapes'
import { TabBarCustom } from 'src/scenes/tabBarCustom'

import { Routes } from './Routes'
import { SharedElementSkateNavigator } from './stacks/sharedElementSkateNavigator'
import { SharedElementStackNavigator } from './stacks/sharedElementStackNavigator'

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
      <Stack.Screen
        name={Routes.ReflectlyColorSelection}
        component={ReflectlyColorSelection}
      />
      <Stack.Screen
        name={Routes.CustomOnboarding}
        component={CustomOnboarding}
      />
      <Stack.Screen
        name={Routes.SharedElementTransition}
        component={SharedElementStackNavigator}
      />
      <Stack.Screen name={Routes.Accordion} component={AccordionList} />
      <Stack.Screen name={Routes.TabBarCustom} component={TabBarCustom} />
      <Stack.Screen
        name={Routes.SkateChallenge}
        component={SharedElementSkateNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={Routes.SpotifyPlayer} component={SpotifyPlayer} />
      <Stack.Screen name={Routes.StickyShapes} component={StickyShapes} />
    </Stack.Navigator>
  )
}
