import { Routes } from 'src/navigation/Routes'

import { HomeItem } from './types'

export const examples: HomeItem[] = [
  {
    backgroundStyle: {
      backgroundColor: '#1d3557',
    },
    route: Routes.RN2StartExample,
    subtitle: 'First animation example in Reanimated 2',
    title: 'Start Reanimated2',
  },
  {
    backgroundStyle: {
      backgroundColor: '#e63946',
    },
    route: Routes.PanGesture,
    subtitle: 'Drag and Drop across the screen',
    title: 'Pan gesture',
  },
  {
    backgroundStyle: {
      backgroundColor: '#2a9d8f',
    },
    route: Routes.CircularProgress,
    subtitle: 'Circular progress changing color!',
    title: 'Toggl',
  },
  {
    backgroundStyle: {
      backgroundColor: '#023e8a',
    },
    route: Routes.ReflectlyColorSelection,
    subtitle: 'Reflectly like changing color!',
    title: 'Reflectly color selection',
  },
  {
    backgroundStyle: {
      backgroundColor: '#264653',
    },
    route: Routes.CustomOnboarding,
    subtitle: 'A cool way to introduce your app',
    title: 'Custom onboarding',
  },
  {
    backgroundStyle: {
      backgroundColor: '#fca311',
    },
    route: Routes.SharedElementTransition,
    subtitle: 'Instagram like gallery transition',
    title: 'Instagram gallery',
  },
  {
    backgroundStyle: {
      backgroundColor: '#9d0208',
    },
    route: Routes.Accordion,
    subtitle: 'A collapsible list',
    title: 'Accordion list',
  },
  {
    backgroundStyle: {
      backgroundColor: '#6d597a',
    },
    route: Routes.TabBarCustom,
    subtitle: 'A custom tab bar with cool UX',
    title: 'Custom tab bar',
  },
  {
    backgroundStyle: {
      backgroundColor: '#212529',
    },
    route: Routes.SkateChallenge,
    subtitle: 'Skate challenge from Dribbble',
    title: 'Skate challenge',
  },
  {
    backgroundStyle: {
      backgroundColor: '#007f5f',
    },
    route: Routes.SpotifyPlayer,
    subtitle: 'Spotify player and list clone',
    title: 'Spotify clone',
  },
  {
    backgroundStyle: {
      backgroundColor: '#5f0f40',
    },
    route: Routes.StickyShapes,
    subtitle: 'Cool morphing shapes FT William Candillion',
    title: 'Sticky shapes',
  },
  {
    backgroundStyle: {
      backgroundColor: '#00509d',
    },
    route: Routes.ChanelScroll,
    subtitle: 'Cool UX scroll FT William Candillion',
    title: 'Chanel scroll',
  },
  {
    backgroundStyle: {
      backgroundColor: '#4a4e69',
    },
    route: Routes.RainbowCharts,
    subtitle: 'Cool charts FT William Candillion',
    title: 'Rainbow charts',
  },
  {
    backgroundStyle: {
      backgroundColor: '#480ca8',
    },
    route: Routes.BouncingBall,
    subtitle: 'Bouncing ball in football field',
    title: 'Bouncing Ball',
  },
]
