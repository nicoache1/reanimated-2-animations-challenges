import { Routes } from 'src/navigation/routes'

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
    route: Routes.Glassmorphism,
    subtitle: 'Glassmorphism basic with RN Skia',
    title: 'Glassmorphism',
  },
  {
    backgroundStyle: {
      backgroundColor: COLORS[1 % COLORS.length],
    },
    route: Routes.NewGestures,
    subtitle: 'New drag & drop using RN Gesture Handler v2.0',
    title: 'Drag & Drop',
  },
  {
    backgroundStyle: {
      backgroundColor: COLORS[2 % COLORS.length],
    },
    route: Routes.GestureComposition,
    subtitle: 'Test about gesture composition with new RN Gesture Handler v2.0',
    title: 'Gesture Composition',
  },
  {
    backgroundStyle: {
      backgroundColor: COLORS[3 % COLORS.length],
    },
    route: Routes.GhostInterface,
    subtitle: 'Test about using sensors to animate the screen',
    title: 'Sensors + Reanimated',
  },
  {
    backgroundStyle: {
      backgroundColor: COLORS[4 % COLORS.length],
    },
    route: Routes.Neumorphism,
    subtitle: 'Neumorphism applied to a real UI with RN Skia',
    title: 'Neumorphism',
  },
  {
    backgroundStyle: {
      backgroundColor: COLORS[5 % COLORS.length],
    },
    route: Routes.DragToDelete,
    subtitle: 'Drag to send to trash',
    title: 'Drag To Delete',
  },
]
