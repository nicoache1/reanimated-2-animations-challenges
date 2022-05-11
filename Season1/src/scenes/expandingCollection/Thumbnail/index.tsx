import React from 'react'
import { Image, StyleProp, StyleSheet, View, ViewStyle } from 'react-native'

import { userPhotos } from '../constants'

interface ThumbnailProps {
  index: number
  customStyles?: StyleProp<ViewStyle>
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 45 / 2,
    height: 45,
    width: 45,
  },
  thumbnail: {
    borderRadius: 45 / 2,
    height: 45,
    position: 'absolute',
    width: 45,
  },
  thumbnailContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 50,
  },
})

export const Thumbnail: React.FC<ThumbnailProps> = ({
  index,
  customStyles,
}) => {
  return (
    <View
      key={`${index}`}
      style={[
        {
          left: 40 * index,
        },
        styles.thumbnail,
        customStyles,
      ]}>
      <Image
        style={styles.image}
        resizeMode={'cover'}
        source={userPhotos[index % userPhotos.length]}
      />
    </View>
  )
}
