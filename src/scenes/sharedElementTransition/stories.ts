import Story1 from 'src/assets/images/sharedElement/1.jpg'
import Story2 from 'src/assets/images/sharedElement/2.jpg'
import Story3 from 'src/assets/images/sharedElement/3.jpg'
import Story4 from 'src/assets/images/sharedElement/4.jpg'
import Story5 from 'src/assets/images/sharedElement/5.jpg'
import Story6 from 'src/assets/images/sharedElement/6.jpg'
import Story7 from 'src/assets/images/sharedElement/7.jpg'
import VideoStory from 'src/assets/images/sharedElement/7.mp4'
import AlexanderAvatar from 'src/assets/images/sharedElement/alexandergarcia.png'
import AndreaAvatar from 'src/assets/images/sharedElement/andrea.schmidt.png'
import DerekAvatar from 'src/assets/images/sharedElement/derek.russel.png'
import JmitchAvatar from 'src/assets/images/sharedElement/jmitch.png'
import MonicaAvatar from 'src/assets/images/sharedElement/monicaa.png'

import { Story } from './types'

export const stories: Story[] = [
  {
    avatar: DerekAvatar,
    id: '2',
    source: Story2,
    user: 'derek.russel',
  },
  {
    avatar: JmitchAvatar,
    id: '4',
    source: Story4,
    user: 'jmitch',
  },
  {
    avatar: AndreaAvatar,
    id: '7',
    source: Story7,
    user: 'andrea.schmidt',
    video: VideoStory,
  },
  {
    avatar: MonicaAvatar,
    id: '5',
    source: Story5,
    user: 'monicaa',
  },
  {
    avatar: AlexanderAvatar,
    id: '3',
    source: Story3,
    user: 'alexandergarcia',
  },
  {
    avatar: AndreaAvatar,
    id: '1',
    source: Story1,
    user: 'andrea.schmidt',
  },
  {
    avatar: AndreaAvatar,
    id: '6',
    source: Story6,
    user: 'andrea.schmidt',
  },
]
