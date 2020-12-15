import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Story1 from 'src/assets/images/sharedElement/2.jpg'
import DerekAvatar from 'src/assets/images/sharedElement/derek.russel.png'

import { Story } from '../types'
import StoryThumbnail from './StoryThumbnail'

export const stories: Story[] = [
  {
    avatar: DerekAvatar,
    id: '2',
    source: Story1,
    user: 'derek.russel',
  },
  {
    avatar: require('src/assets/images/sharedElement/jmitch.png'),
    id: '4',
    source: require('src/assets/images/sharedElement/4.jpg'),
    user: 'jmitch',
  },
  {
    avatar: require('src/assets/images/sharedElement/andrea.schmidt.png'),
    id: '7',
    source: require('src/assets/images/sharedElement/7.jpg'),
    user: 'andrea.schmidt',
    video: require('src/assets/images/sharedElement/7.mp4'),
  },
  {
    avatar: require('src/assets/images/sharedElement/monicaa.png'),
    id: '5',
    source: require('src/assets/images/sharedElement/5.jpg'),
    user: 'monicaa',
  },
  {
    avatar: require('src/assets/images/sharedElement/alexandergarcia.png'),
    id: '3',
    source: require('src/assets/images/sharedElement/3.jpg'),
    user: 'alexandergarcia',
  },
  {
    avatar: require('src/assets/images/sharedElement/andrea.schmidt.png'),
    id: '1',
    source: require('src/assets/images/sharedElement/1.jpg'),
    user: 'andrea.schmidt',
  },
  {
    avatar: require('src/assets/images/sharedElement/andrea.schmidt.png'),
    id: '6',
    source: require('src/assets/images/sharedElement/6.jpg'),
    user: 'andrea.schmidt',
  },
]

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
})

export const Snapchat: React.FC<{}> = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {stories.map((story) => (
          <StoryThumbnail key={story.id} story={story} />
        ))}
      </View>
    </ScrollView>
  )
}
