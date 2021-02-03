import { Routes } from 'src/navigation/Routes'

import { HomeItem } from './types'

const COLORS = [
  '#1d3557',
  '#e63946',
  '#2a9d8f',
  '#023e8a',
  '#264653',
  '#fca311',
  '#9d0208',
  '#6d597a',
  '#212529',
  '#007f5f',
  '#5f0f40',
  '#00509d',
  '#4a4e69',
  '#480ca8',
]

export const examples: HomeItem[] = [
  {
    backgroundStyle: {
      backgroundColor: COLORS[0 % COLORS.length],
    },
    route: Routes.RN2StartExample,
    subtitle: 'First animation example in Reanimated 2',
    title: 'Start Reanimated2',
  },
  {
    backgroundStyle: {
      backgroundColor: COLORS[1 % COLORS.length],
    },
    route: Routes.PanGesture,
    subtitle: 'Drag and Drop across the screen',
    title: 'Pan gesture',
  },
  {
    backgroundStyle: {
      backgroundColor: COLORS[2 % COLORS.length],
    },
    route: Routes.CircularProgress,
    subtitle: 'Circular progress changing color!',
    title: 'Toggl',
  },
  {
    backgroundStyle: {
      backgroundColor: COLORS[3 % COLORS.length],
    },
    route: Routes.ReflectlyColorSelection,
    subtitle: 'Reflectly like changing color!',
    title: 'Reflectly color selection',
  },
  {
    backgroundStyle: {
      backgroundColor: COLORS[4 % COLORS.length],
    },
    route: Routes.CustomOnboarding,
    subtitle: 'A cool way to introduce your app',
    title: 'Custom onboarding',
  },
  {
    backgroundStyle: {
      backgroundColor: COLORS[5 % COLORS.length],
    },
    route: Routes.SharedElementTransition,
    subtitle: 'Instagram like gallery transition',
    title: 'Instagram gallery',
  },
  {
    backgroundStyle: {
      backgroundColor: COLORS[6 % COLORS.length],
    },
    route: Routes.Accordion,
    subtitle: 'A collapsible list',
    title: 'Accordion list',
  },
  {
    backgroundStyle: {
      backgroundColor: COLORS[7 % COLORS.length],
    },
    route: Routes.TabBarCustom,
    subtitle: 'A custom tab bar with cool UX',
    title: 'Custom tab bar',
  },
  {
    backgroundStyle: {
      backgroundColor: COLORS[8 % COLORS.length],
    },
    route: Routes.SkateChallenge,
    subtitle: 'Skate challenge from Dribbble',
    title: 'Skate challenge',
  },
  {
    backgroundStyle: {
      backgroundColor: COLORS[9 % COLORS.length],
    },
    route: Routes.SpotifyPlayer,
    subtitle: 'Spotify player and list clone',
    title: 'Spotify clone',
  },
  {
    backgroundStyle: {
      backgroundColor: COLORS[10 % COLORS.length],
    },
    route: Routes.StickyShapes,
    subtitle: 'Cool morphing shapes FT William Candillion',
    title: 'Sticky shapes',
  },
  {
    backgroundStyle: {
      backgroundColor: COLORS[11 % COLORS.length],
    },
    route: Routes.ChanelScroll,
    subtitle: 'Cool UX scroll FT William Candillion',
    title: 'Chanel scroll',
  },
  {
    backgroundStyle: {
      backgroundColor: COLORS[12 % COLORS.length],
    },
    route: Routes.RainbowCharts,
    subtitle: 'Cool charts FT William Candillion',
    title: 'Rainbow charts',
  },
  {
    backgroundStyle: {
      backgroundColor: COLORS[13 % COLORS.length],
    },
    route: Routes.BouncingBall,
    subtitle: 'Bouncing ball in football field',
    title: 'Bouncing Ball',
  },
  {
    backgroundStyle: {
      backgroundColor: COLORS[14 % COLORS.length],
    },
    route: Routes.PaperSwitch,
    subtitle: 'A switch that paints the background of the parent',
    title: 'Paper Switch',
  },
  {
    backgroundStyle: {
      backgroundColor: COLORS[15 % COLORS.length],
    },
    route: Routes.FoldingCell,
    subtitle: 'Fold view in React Native',
    title: 'Folding Cell',
  },
  {
    backgroundStyle: {
      backgroundColor: COLORS[16 % COLORS.length],
    },
    route: Routes.LoveSlider,
    subtitle: 'A cute slider',
    title: 'Love Slider',
  },
  {
    backgroundStyle: {
      backgroundColor: COLORS[17 % COLORS.length],
    },
    route: Routes.FancySwitch,
    subtitle: 'A fancy changing switch',
    title: 'Fancy Switch',
  },
  {
    backgroundStyle: {
      backgroundColor: COLORS[18 % COLORS.length],
    },
    route: Routes.MenuButton,
    subtitle: 'A fancy floating button',
    title: 'Menu Button',
  },
  {
    backgroundStyle: {
      backgroundColor: COLORS[19 % COLORS.length],
    },
    route: Routes.WalletChallenge,
    subtitle: 'A fancy wallet',
    title: 'Wallet',
  },
  {
    backgroundStyle: {
      backgroundColor: COLORS[20 % COLORS.length],
    },
    route: Routes.ExpandingCollectionChallenge,
    subtitle: 'Expanding collection challenge from Dribbble',
    title: 'Expanding Collection',
  },
  {
    backgroundStyle: {
      backgroundColor: COLORS[21 % COLORS.length],
    },
    route: Routes.MusicApp,
    subtitle: 'Cool music app UX interaction',
    title: 'Music App',
  },
  {
    backgroundStyle: {
      backgroundColor: COLORS[22 % COLORS.length],
    },
    route: Routes.BezierSlider,
    subtitle: 'A slider with Bezier curves',
    title: 'Bezier Slider',
  },
  {
    backgroundStyle: {
      backgroundColor: COLORS[23 % COLORS.length],
    },
    route: Routes.Mandalorian,
    subtitle: 'Mandalorian App design',
    title: 'Star Wars - The Mandalorian',
  },
]
