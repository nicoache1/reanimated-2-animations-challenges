import { useFocusEffect, useNavigation } from '@react-navigation/native'
import React, { useCallback, useState } from 'react'
import { Image, Pressable, View } from 'react-native'
import { SharedElement } from 'react-navigation-shared-element'
import { Routes } from 'src/navigation/Routes'
import { Story } from 'src/scenes/sharedElementTransition/types'

import { styles } from './styles'

interface LayoutProps {
  story: Story
}

export const StoryThumbnail: React.FC<LayoutProps> = ({ story }) => {
  const [opacity, setOpacity] = useState(1)
  const navigation = useNavigation()

  useFocusEffect(() => {
    if (navigation.isFocused()) {
      setOpacity(1)
    }
  })

  const onPress = useCallback(() => {
    navigation.navigate(Routes.SnapchatStory, { story })
    setOpacity(0)
  }, [navigation, story])

  const pressableStyle = useCallback(
    ({ pressed }) => ({ opacity: pressed ? 0.5 : 1 }),
    [],
  )

  return (
    <Pressable style={pressableStyle} onPress={onPress}>
      <View style={[styles.container, { opacity }]}>
        <SharedElement id={story.id} style={styles.flexible}>
          <Image source={story.source} style={styles.image} />
        </SharedElement>
      </View>
    </Pressable>
  )
}

export default StoryThumbnail
