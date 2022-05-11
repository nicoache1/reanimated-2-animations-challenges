import { times } from 'lodash'
import React, { useMemo } from 'react'
import { Text, View } from 'react-native'
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated'
import Favorite from 'src/assets/images/expandingCollection/favourite.svg'
import { ITEM_SIZE } from 'src/scenes/expandingCollection/constants'
import { ExpandingItem } from 'src/scenes/expandingCollection/types'

import { Thumbnail } from '../../Thumbnail'
import { styles } from './styles'

interface FooterProps {
  progress: Animated.SharedValue<number>
  item: ExpandingItem
}

export const Footer: React.FC<FooterProps> = ({ progress, item }) => {
  const animatedBackground = useAnimatedStyle(() => ({
    height: interpolate(progress.value, [0, 1], [300, 350], Extrapolate.CLAMP),
    left: interpolate(
      progress.value,
      [0, 1],
      [0, -ITEM_SIZE * 0.1],
      Extrapolate.CLAMP,
    ),
    transform: [
      {
        translateY: interpolate(
          progress.value,
          [0, 1],
          [0, 50],
          Extrapolate.CLAMP,
        ),
      },
    ],
    width: interpolate(
      progress.value,
      [0, 1],
      [ITEM_SIZE, ITEM_SIZE * 1.2],
      Extrapolate.CLAMP,
    ),
  }))

  const stars = useMemo(() => times(5), [])

  return (
    <Animated.View style={[styles.container, animatedBackground]}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{item.address}</Text>
      </View>
      <View style={styles.favoriteRow}>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>NO. 1234323</Text>
        </View>
        <View style={styles.favoriteContainer}>
          {stars.map((_, starIndex) => (
            <Favorite
              width={18}
              height={18}
              stroke={starIndex + 1 <= item.stars ? '#00b4d8' : '#ade8f4'}
            />
          ))}
        </View>
      </View>
      <View style={styles.thumbnailContainer}>
        {[1, 2, 3, 4].map((_, index) => (
          <Thumbnail index={index} />
        ))}
      </View>
    </Animated.View>
  )
}
