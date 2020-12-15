import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import Cyborg from 'src/assets/images/customOnboarding/cyborg_4.svg'

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    width,
  },
  subtitle: {
    color: '#FFFFFF',
    fontFamily: 'Ridley Grotesk',
    fontSize: 40,
  },
  subtitle2: {
    color: '#142664',
    fontFamily: 'Ridley Grotesk Bold',
    fontSize: 40,
  },
  textContainer: {
    flexDirection: 'row',
  },
  vector: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
  },
})

export const Slide4: React.FC<{}> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.vector}>
        <Svg width={width} height="812" viewBox="0 0 375 812" fill="none">
          <Path
            d="M-757.5 612.5L-1210 243.5V948.5H459V264.5L112 673L-335.5 -76L-757.5 612.5Z"
            fill="#e65e8d"
            fill-opacity="0.2"
          />
        </Svg>
      </View>
      <Cyborg />
      <View style={styles.textContainer}>
        <Text style={styles.subtitle}>ALL</Text>
        <Text style={styles.subtitle2}>DONE!</Text>
      </View>
    </View>
  )
}
