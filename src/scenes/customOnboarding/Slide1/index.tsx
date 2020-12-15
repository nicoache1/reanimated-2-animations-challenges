import React from 'react'
import { Dimensions, Text, View } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import Cyborg from 'src/assets/customOnboarding/cyborg_1.svg'

import { styles } from './styles'

const { width } = Dimensions.get('window')

export const Slide1: React.FC<{}> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.vector}>
        <Svg width={width} height="717" viewBox="0 0 375 717" fill="none">
          <Path
            d="M-348.5 688.5L-801 319.5V1024.5H868V340.5L521 749L73.5 0L-348.5 688.5Z"
            fill="#142664"
            fillOpacity="0.2"
          />
        </Svg>
      </View>
      <Cyborg />
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.subtitle}>TO THE FUTURE</Text>
    </View>
  )
}
