import React from 'react'
import Favorite from 'src/assets/images/customTabBar/favourite.svg'
import Home from 'src/assets/images/customTabBar/home.svg'
import Profile from 'src/assets/images/customTabBar/profile.svg'
import Search from 'src/assets/images/customTabBar/search.svg'

import { TabBarItem } from './types'

export const items: TabBarItem[] = [
  {
    color: 'rgb(222,215,241)',
    icon: (active: boolean) => (
      <Home stroke={active ? 'rgb(85,62,176)' : 'black'} />
    ),
    label: 'Home',
    textColor: 'rgb(85,62,176)',
    value: 1,
  },
  {
    color: 'rgb(241,215,235)',
    icon: (active: boolean) => (
      <Search stroke={active ? 'rgb(168,69,141)' : 'black'} />
    ),
    label: 'Search',
    textColor: 'rgb(168,69,141)',
    value: 2,
  },
  {
    color: 'rgb(249,238,214)',
    icon: (active: boolean) => (
      <Favorite stroke={active ? 'rgb(227,169,70)' : 'black'} />
    ),
    label: 'Favorite',
    textColor: 'rgb(227,169,70)',
    value: 3,
  },
  {
    color: 'rgb(212,233,237)',
    icon: (active: boolean) => (
      <Profile stroke={active ? 'rgb(77,147,167)' : 'black'} />
    ),
    label: 'Profile',
    textColor: 'rgb(77,147,167)',
    value: 4,
  },
]
