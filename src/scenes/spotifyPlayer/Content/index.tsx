import React, { Fragment } from 'react'
import {
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated'

import { Track } from '../Track'
import { AlbumType, MAX_HEADER_HEIGHT } from '../types'
import { styles } from './styles'

interface LayoutProps {
  artist: AlbumType['artist']
  tracks: AlbumType['tracks']
  offsetY: Animated.SharedValue<number>
  onScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void
}

const { height } = Dimensions.get('window')

export const Content: React.FC<LayoutProps> = ({
  artist,
  tracks,
  onScroll,
  offsetY,
}) => {
  const animatedOpacity = useAnimatedStyle(() => ({
    opacity: interpolate(
      offsetY.value,
      [-MAX_HEADER_HEIGHT / 2, 0],
      [0, 1],
      Extrapolate.CLAMP,
    ),
  }))

  const animatedHeight = useAnimatedStyle(() => ({
    height: interpolate(
      offsetY.value,
      [-MAX_HEADER_HEIGHT, 0],
      [0, MAX_HEADER_HEIGHT],
      Extrapolate.CLAMP,
    ),
  }))

  return (
    <Animated.ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      onScroll={onScroll}
      scrollEventThrottle={1}>
      <Fragment>
        <Animated.View style={[styles.header, animatedOpacity]}>
          <Animated.View style={[styles.gradient, animatedHeight]}>
            <LinearGradient
              style={StyleSheet.absoluteFill}
              start={{ x: 0, y: 0.7 }}
              end={{ x: 0, y: 1 }}
              colors={['transparent', 'rgba(0, 0, 0, 0.2)', 'transparent']}
            />
          </Animated.View>
          <View style={styles.artistContainer}>
            <Text style={styles.artist}>{artist}</Text>
          </View>
        </Animated.View>
        <View style={styles.tracks}>
          {tracks.map((track, key) => (
            <Track index={key + 1} {...{ artist, key, track }} />
          ))}
        </View>
      </Fragment>
    </Animated.ScrollView>
  )
}
