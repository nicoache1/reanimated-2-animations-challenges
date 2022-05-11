import { RouteProp } from '@react-navigation/native'
import React, { useLayoutEffect } from 'react'
import { View } from 'react-native'
import ChevronLeft from 'src/assets/images/musicApp/ChevronLeft.svg'
import { HeaderButton } from 'src/component/HeaderButton'
import { SceneContainer } from 'src/component/SceneContainer'
import { ScreenNavigationProp } from 'src/types/react-navigation'

import { outerInset } from '../sceneConfig'
import { Album } from './Album'
import { PlayerControls } from './PlayerControls'
import { SongInfo } from './SongInfo'
import { SongTrack } from './SongTrack'
import { styles } from './styles'

interface MusicPlayerProps {
  navigation: ScreenNavigationProp<any, any>
  route: RouteProp<
    {
      Song: { song: { id: string } }
    },
    'Song'
  >
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({
  route,
  navigation,
}) => {
  useLayoutEffect(() => {
    const onPress = () => navigation.goBack()
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButton onPress={onPress}>
          <ChevronLeft />
        </HeaderButton>
      ),
      headerStyle: {
        elevation: 0,
        shadowOffset: { height: 0, width: 0 },
      },
      title: '',
    })
  }, [navigation])

  const { song } = route.params

  return (
    <SceneContainer forceInset={outerInset} style={styles.scene}>
      <View style={styles.container}>
        <Album id={song.id} />
        <SongTrack />
        <SongInfo />
        <PlayerControls />
      </View>
    </SceneContainer>
  )
}
