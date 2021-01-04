import React from 'react'
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import ArianaCover from 'src/assets/images/spotifyPlayer/ariana_grande_positions.png'
import ChevronDown from 'src/assets/images/spotifyPlayer/ChevronDown.svg'
import FavoriteIcon from 'src/assets/images/spotifyPlayer/Favorite.svg'
import MoreIcon from 'src/assets/images/spotifyPlayer/More.svg'
import RepeatIcon from 'src/assets/images/spotifyPlayer/Repeat.svg'
import PlayIcon from 'src/assets/images/spotifyPlayer/RoundPlay.svg'
import ShuffleIcon from 'src/assets/images/spotifyPlayer/Shuffle.svg'
import StepBackwardIcon from 'src/assets/images/spotifyPlayer/StepBackwards.svg'
import StepForwardIcon from 'src/assets/images/spotifyPlayer/StepForward.svg'

import { styles } from './styles'

interface LayoutProps {
  onPress: () => void
}

export const Player: React.FC<LayoutProps> = ({ onPress }) => {
  return (
    <SafeAreaView style={styles.root}>
      <LinearGradient
        colors={['#0b3057', '#051c30']}
        style={StyleSheet.absoluteFill}
      />
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableWithoutFeedback
            style={styles.button}
            onPress={onPress}
            hitSlop={{ bottom: 20, left: 20, right: 20, top: 20 }}>
            <ChevronDown />
          </TouchableWithoutFeedback>
          <Text style={styles.title}>Ariana Grande</Text>
          <TouchableWithoutFeedback style={styles.button}>
            <MoreIcon />
          </TouchableWithoutFeedback>
        </View>
        <Image source={ArianaCover} style={styles.cover} />
        <View style={styles.metadata}>
          <View>
            <Text style={styles.song}>Positions</Text>
            <Text style={styles.artist}>Ariana Grande</Text>
          </View>
          <FavoriteIcon />
        </View>
        <View style={styles.slider} />
        <View style={styles.controls}>
          <ShuffleIcon />
          <StepBackwardIcon />
          <PlayIcon />
          <StepForwardIcon />
          <RepeatIcon />
        </View>
      </View>
    </SafeAreaView>
  )
}
