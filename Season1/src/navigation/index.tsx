import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { AccordionList } from 'src/scenes/accordion'
import { BezierSlider } from 'src/scenes/bezierSlider'
import { BouncingBall } from 'src/scenes/bouncingBall'
import { ChanelScroll } from 'src/scenes/chanelScroll'
import { CircularProgress } from 'src/scenes/circularProgress'
import { CustomOnboarding } from 'src/scenes/customOnboarding'
import { FancySwitch } from 'src/scenes/fancySwitch'
import { FoldingCell } from 'src/scenes/foldingCell'
import { Home } from 'src/scenes/home'
import { LoveSlider } from 'src/scenes/loveSlider'
import { MenuButton } from 'src/scenes/menuButton'
import { PanGesture } from 'src/scenes/panGesture'
import { PaperSwitch } from 'src/scenes/paperSwitch'
import { RainbowCharts } from 'src/scenes/rainbowCharts'
import { ReflectlyColorSelection } from 'src/scenes/reflectlyColorSelection'
import { SpotifyPlayer } from 'src/scenes/spotifyPlayer'
import { AnimatedStyleUpdateExample } from 'src/scenes/start/AnimatedStyleUpdateExample'
import { StickyShapes } from 'src/scenes/stickyShapes'
import { TabBarCustom } from 'src/scenes/tabBarCustom'

import { Routes } from './Routes'
import { MandalorianStackNavigator } from './stacks/mandalorianStackNavigator'
import { SharedElementExpandNavigator } from './stacks/sharedElementExpandNavigator'
import { SharedElementMusicAppNavigator } from './stacks/sharedElementMusicAppNavigator'
import { SharedElementSkateNavigator } from './stacks/sharedElementSkateNavigator'
import { SharedElementStackNavigator } from './stacks/sharedElementStackNavigator'
import { SharedElementWalletNavigator } from './stacks/sharedElementWalletNavigator'

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
      <Stack.Screen
        name={Routes.LoveSlider}
        component={LoveSlider}
        options={{ gestureEnabled: false }}
      />
      <Stack.Screen
        name={Routes.FancySwitch}
        component={FancySwitch}
        options={{ gestureEnabled: false }}
      />
      <Stack.Screen
        name={Routes.MenuButton}
        component={MenuButton}
        options={{ gestureEnabled: false }}
      />
      <Stack.Screen
        name={Routes.WalletChallenge}
        component={SharedElementWalletNavigator}
        options={{ gestureEnabled: false }}
      />
      <Stack.Screen
        name={Routes.ExpandingCollectionChallenge}
        component={SharedElementExpandNavigator}
        options={{ gestureEnabled: false }}
      />
      <Stack.Screen
        name={Routes.MusicApp}
        options={{ headerShown: false }}
        component={SharedElementMusicAppNavigator}
      />
      <Stack.Screen
        name={Routes.BezierSlider}
        component={BezierSlider}
        options={{ gestureEnabled: false }}
      />
      <Stack.Screen
        name={Routes.Mandalorian}
        component={MandalorianStackNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
