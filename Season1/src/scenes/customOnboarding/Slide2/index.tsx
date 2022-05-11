import React from 'react'
import { Dimensions, Text, View } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import Cyborg from 'src/assets/images/customOnboarding/cyborg_2.svg'

import { styles } from './styles'

const { width, height } = Dimensions.get('window')

export const Slide2: React.FC<{}> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.vector}>
        <Svg width={width} height={height} viewBox="0 0 375 812" fill="none">
          <Path
            d="M-7.5 612.5L-460 243.5V948.5H1209V264.5L862 673L414.5 -76L-7.5 612.5Z"
            fill="#e4726c"
            fillOpacity="0.4"
          />
        </Svg>
      </View>
      <Cyborg />
      <Text style={styles.subtitle}>CREATE ROBOTS IN</Text>
      <Text style={styles.title}>5 MINUTES</Text>
    </View>
  )
}
