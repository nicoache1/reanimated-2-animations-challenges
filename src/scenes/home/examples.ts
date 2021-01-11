import { Routes } from 'src/navigation/Routes'

import { ExampleItem } from './types'

export const examples: ExampleItem[] = [
  {
    name: 'Start Reanimated2',
    route: Routes.RN2StartExample,
  },
  {
    name: 'Pan gesture',
    route: Routes.PanGesture,
  },
  {
    name: 'Toggl',
    route: Routes.CircularProgress,
  },
  {
    name: 'Reflectly color selection',
    route: Routes.ReflectlyColorSelection,
  },
  {
    name: 'Custom onboarding',
    route: Routes.CustomOnboarding,
  },
  {
    name: 'Instagram gallery',
    route: Routes.SharedElementTransition,
  },
  {
    name: 'Accordion list',
    route: Routes.Accordion,
  },
  {
    name: 'Custom tab bar',
    route: Routes.TabBarCustom,
  },
  {
    name: 'Skate challenge',
    route: Routes.SkateChallenge,
  },
  {
    name: 'Spotify clone',
    route: Routes.SpotifyPlayer,
  },
  {
    name: 'Sticky shapes',
    route: Routes.StickyShapes,
  },
  {
    name: 'Chanel scroll',
    route: Routes.ChanelScroll,
  },
]
