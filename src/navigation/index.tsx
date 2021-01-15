import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { AccordionList } from 'src/scenes/accordion'
import { BouncingBall } from 'src/scenes/bouncingBall'
import { ChanelScroll } from 'src/scenes/chanelScroll'
import { CircularProgress } from 'src/scenes/circularProgress'
import { CustomOnboarding } from 'src/scenes/customOnboarding'
import { FoldingCell } from 'src/scenes/foldingCell'
import { Home } from 'src/scenes/home'
import { PanGesture } from 'src/scenes/panGesture'
import { PaperSwitch } from 'src/scenes/paperSwitch'
import { RainbowCharts } from 'src/scenes/rainbowCharts'
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
      <Stack.Screen
        name={Routes.Home}
        component={Home}
        options={{ headerShown: false }}
      />
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
      <Stack.Screen
        name={Routes.ChanelScroll}
        component={ChanelScroll}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={Routes.RainbowCharts} component={RainbowCharts} />
      <Stack.Screen name={Routes.BouncingBall} component={BouncingBall} />
      <Stack.Screen name={Routes.PaperSwitch} component={PaperSwitch} />
      <Stack.Screen name={Routes.FoldingCell} component={FoldingCell} />
    </Stack.Navigator>
  )
}
