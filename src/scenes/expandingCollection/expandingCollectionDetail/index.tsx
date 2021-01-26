import { RouteProp } from '@react-navigation/native'
import React, { useCallback } from 'react'
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native'
import { SharedElement } from 'react-navigation-shared-element'
import { ScreenNavigationProp } from 'src/types/react-navigation'

import { Thumbnail } from '../Thumbnail'
import { ExpandingItem } from '../types'

interface ExpandingCollectionDetailProps {
  navigation: ScreenNavigationProp<any, any>
  route: RouteProp<
    {
      Item: {
        item: ExpandingItem
      }
    },
    'Item'
  >
}
const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  descriptionContainer: {
    flex: 1,
  },
  image: {
    height: 200,
    width,
  },
  rowContainer: {
    height: 120,
    paddingHorizontal: 20,
  },
  thumbnail: {
    left: 0,
    position: undefined,
  },
  thumbnailContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  titleContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
})

export const ExpandingCollectionDetail: React.FC<ExpandingCollectionDetailProps> = ({
  navigation,
  route,
}) => {
  const { item } = route.params

  const onPress = useCallback(() => {
    navigation.goBack()
  }, [navigation])

  return (
    <View style={styles.container}>
      <ScrollView>
        <SharedElement id={item.id}>
          <TouchableNativeFeedback onPress={onPress}>
            <Image
              source={item.image}
              style={styles.image}
              resizeMode={'cover'}
            />
          </TouchableNativeFeedback>
        </SharedElement>
        {[1, 2, 3, 4, 5, 6, 7].map((_, index) => (
          <View key={`${item.id}${index}`} style={styles.rowContainer}>
            <View style={styles.thumbnailContainer}>
              <View>
                <Thumbnail index={index} customStyles={styles.thumbnail} />
              </View>
              <View style={styles.titleContainer}>
                <Text>Pedro Alfonso</Text>
              </View>
              <View>
                <Text>14th Feb</Text>
              </View>
            </View>
            <View style={styles.descriptionContainer}>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum ac aliquet neque. Quisque at erat a nisl placerat
                egestas ac sed velit. Vestibulum eget enim in arcu interdum
                sodales.
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}
