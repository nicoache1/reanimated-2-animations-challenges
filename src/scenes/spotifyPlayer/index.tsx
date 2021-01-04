import React, { useLayoutEffect } from 'react'
import { View } from 'react-native'
import { StatusBar } from 'react-native'
import {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated'
import { SceneContainer } from 'src/component/SceneContainer'
import { Routes } from 'src/navigation/Routes'
import { ScreenNavigationProp } from 'src/types/react-navigation'

import { album } from './album'
import { Content } from './Content'
import { Cover } from './Cover'
import { Header } from './Header'
import { useSetContainerStyle } from './hooks/useSetContainerStyle'
import { outerInset } from './sceneConfig'
import { styles } from './styles'

interface ScreenProps {
  navigation: ScreenNavigationProp<any, Routes.SpotifyPlayer>
}

export const SpotifyPlayer: React.FC<ScreenProps> = ({ navigation }) => {
  const { containerStyle } = useSetContainerStyle()

  const offsetY = useSharedValue(0)

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => <Header artist={album.artist} offsetY={offsetY} />,
    })
  }, [navigation, offsetY])

  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      offsetY.value = event.contentOffset.y
    },
  })

  return (
    <SceneContainer forceInset={outerInset} style={containerStyle}>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <Cover cover={album.cover} offsetY={offsetY} />
        <Content
          artist={album.artist}
          tracks={album.tracks}
          offsetY={offsetY}
          onScroll={onScroll}
        />
      </View>
    </SceneContainer>
  )
}
