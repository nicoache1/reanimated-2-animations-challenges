import React from 'react'
import { Dimensions, Text, View } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import Cyborg from 'src/assets/images/customOnboarding/cyborg_3.svg'

import { styles } from './styles'

const { width, height } = Dimensions.get('window')

export const Slide3: React.FC<{}> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.vector}>
        <Svg width={width} height={height} viewBox="0 0 375 812" fill="none">
          <Path
            d="M-382.5 612.5L-835 243.5V948.5H834V264.5L487 673L39.5 -76L-382.5 612.5Z"
            fill="#00a181"
            fillOpacity="0.4"
          />
        </Svg>
      </View>
      <Cyborg />
      <Text style={styles.title}>ANY IDEA</Text>
      <Text style={styles.subtitle}>YOU HAVE</Text>
    </View>
  )
}
