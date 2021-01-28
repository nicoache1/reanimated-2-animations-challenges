import LottieView from 'lottie-react-native'
import React from 'react'
import { View } from 'react-native'
import EqualizerJson from 'src/assets/images/musicApp/equalizer.json'
import PlayIcon from 'src/assets/images/musicApp/RoundedPlay.svg'
import StepBackwardIcon from 'src/assets/images/musicApp/StepBackwards.svg'
import StepForwardIcon from 'src/assets/images/musicApp/StepForward.svg'

import { styles } from './styles'

interface PlayerControlsProps {}

export const PlayerControls: React.FC<PlayerControlsProps> = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.controls}>
        <StepBackwardIcon />
        <PlayIcon />
        <StepForwardIcon />
      </View>
      <LottieView source={EqualizerJson} autoPlay />
    </View>
  )
}
