import React from 'react'
import Skate1 from 'src/assets/images/skateChallenge/Skate1.svg'
import Skate2 from 'src/assets/images/skateChallenge/Skate2.svg'
import Skate3 from 'src/assets/images/skateChallenge/Skate3.svg'
import Skate4 from 'src/assets/images/skateChallenge/Skate4.svg'
import Skate5 from 'src/assets/images/skateChallenge/Skate5.svg'
import Skate6 from 'src/assets/images/skateChallenge/Skate6.svg'
import Skate7 from 'src/assets/images/skateChallenge/Skate7.svg'

import { Skate } from './types'

export const Skates: Skate[] = [
  {
    backgroundColor: 'rgb(20, 38, 100)',
    crest: <Skate1 />,
    description:
      'Handmade skateboard desk with original painting from Xmartlabs',
    id: '1',
    material: 'Quebracho',
    name: 'Cold Cat',
    price: 150,
    size: '8" x 32"',
  },
  {
    backgroundColor: 'rgb(99, 147, 188)',
    crest: <Skate2 />,
    description:
      'Handmade skateboard desk with original painting from Xmartlabs',
    id: '2',
    material: 'Quebracho',
    name: 'Christmas Skull',
    price: 170,
    size: '8" x 32"',
  },
  {
    backgroundColor: 'rgb(255, 118, 117)',
    crest: <Skate3 />,
    description:
      'Handmade skateboard desk with original painting from Xmartlabs',
    id: '3',
    material: 'Quebracho',
    name: 'Skull Coffee',
    price: 235,
    size: '8" x 32"',
  },
  {
    backgroundColor: 'rgb(128, 226, 207)',
    crest: <Skate4 />,
    description:
      'Handmade skateboard desk with original painting from Xmartlabs',
    id: '4',
    material: 'Quebracho',
    name: 'Pure Bones',
    price: 90,
    size: '8" x 32"',
  },
  {
    backgroundColor: 'rgb(253, 121, 168)',
    crest: <Skate5 />,
    description:
      'Handmade skateboard desk with original painting from Xmartlabs',
    id: '5',
    material: 'Quebracho',
    name: 'Tribal Music',
    price: 210,
    size: '8" x 32"',
  },
  {
    backgroundColor: 'rgb(128, 226, 207)',
    crest: <Skate6 />,
    description:
      'Handmade skateboard desk with original painting from Xmartlabs',
    id: '6',
    material: 'Quebracho',
    name: 'Beard Style',
    price: 100,
    size: '8" x 32"',
  },
  {
    backgroundColor: 'rgb(99, 147, 188))',
    crest: <Skate7 />,
    description:
      'Handmade skateboard desk with original painting from Xmartlabs',
    id: '7',
    material: 'Quebracho',
    name: 'Angry Koala',
    price: 120,
    size: '8" x 32"',
  },
]
