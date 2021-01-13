import React, { useCallback, useState } from 'react'
import { Dimensions, Image, Switch, Text, View } from 'react-native'
import {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import SmartphoneImage from 'src/assets/images/paperSwitch/smartphone.png'

import { Background } from './Background'
import { CARD_HEIGHT, RADIUS, styles } from './styles'

interface PaperSwitchCardProps {
  backgroundColor: string
  title: string
  subtitle: string
}

const { width: screenWidth } = Dimensions.get('window')

export const PaperSwitchCard: React.FC<PaperSwitchCardProps> = ({
  backgroundColor,
  title,
  subtitle,
}) => {
  const progress = useSharedValue<number>(0)
  const [switchState, setState] = useState(false)
  const [textColor, setTextColor] = useState('rgb(72,202,228)')

  const MAX_RADIUS = useDerivedValue(
    () =>
      Math.SQRT2 *
      (Math.max(screenWidth + screenWidth / 2, CARD_HEIGHT + CARD_HEIGHT / 2) /
        2),
  )

  const animatedBackgroundStyle = useAnimatedStyle(() => {
    return {
      backgroundColor,
      borderRadius: RADIUS,
      height: RADIUS * 2,
      left: screenWidth / 2 + RADIUS,
      top: CARD_HEIGHT / 2,
      transform: [{ scale: progress.value * (MAX_RADIUS.value / RADIUS) }],
      width: RADIUS * 2,
    }
  })

  const onPress = useCallback(() => {
    setState(!switchState)
    setTextColor(switchState ? 'rgb(72,202,228)' : 'white')
    progress.value = withTiming(progress.value === 0 ? 1 : 0)
  }, [progress, switchState])

  return (
    <View style={styles.container}>
      <Background
        colorSelection={'white'}
        animatedBackgroundStyle={animatedBackgroundStyle}
      />
      <View style={styles.titleContainer}>
        <Text style={[{ color: textColor }, styles.title]}>{title}</Text>
      </View>
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <View style={styles.switchContainer}>
        <View style={styles.subsection}>
          <Image source={SmartphoneImage} style={styles.image} />
        </View>
        <View style={styles.subsection}>
          <Switch
            trackColor={{ false: 'gray', true: backgroundColor }}
            onValueChange={onPress}
            value={switchState}
            style={styles.switch}
          />
        </View>
      </View>
    </View>
  )
}
