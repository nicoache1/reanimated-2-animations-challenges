import { RouteProp } from '@react-navigation/native'
import React, { useCallback } from 'react'
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  StyleSheet,
  View,
} from 'react-native'
import {
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler'
import { SharedElement } from 'react-navigation-shared-element'
import { ScreenNavigationProp } from 'src/types/react-navigation'

import { CARD_SIZE } from '../types'
import { Item } from './Item'
import { WalletDetailItem } from './types'

interface WalletDetailsProps {
  navigation: ScreenNavigationProp<any, any>
  route: RouteProp<
    {
      Wallet: {
        wallet: {
          id: string
          image: ImageSourcePropType
        }
      }
    },
    'Wallet'
  >
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
})

const { width } = Dimensions.get('window')

const items: WalletDetailItem[] = [
  { price: 89, subtitle: 'retail', title: 'Amazon' },
  { price: 432, subtitle: 'tech', title: 'Apple' },
  { price: 231, subtitle: 'tech', title: 'Google' },
  { price: 123, subtitle: 'social network', title: 'Facebook' },
  { price: 24, subtitle: 'social network', title: 'Snapchat' },
  { price: 154, subtitle: 'tech', title: 'Tesla' },
  { price: 131, subtitle: 'service', title: 'Uber' },
  { price: 76, subtitle: 'designers', title: 'Dribbble' },
]

export const WalletDetails: React.FC<WalletDetailsProps> = ({
  route,
  navigation,
}) => {
  const { wallet } = route.params

  const onPress = useCallback(() => {
    navigation.goBack()
  }, [navigation])

  return (
    <View style={styles.container}>
      <SharedElement id={wallet.id} style={{ alignItems: 'center' }}>
        <TouchableWithoutFeedback
          onPress={onPress}
          style={{ height: CARD_SIZE, width: width - 40 }}>
          <Image
            style={{ height: CARD_SIZE, width: width - 40 }}
            source={wallet.image}
            resizeMode={'contain'}
          />
        </TouchableWithoutFeedback>
      </SharedElement>
      <View style={{ flex: 1, paddingTop: 10 }}>
        <ScrollView>
          {items.map((item, index) => (
            <Item key={`${index}`} item={item} delay={100 * index} />
          ))}
        </ScrollView>
      </View>
    </View>
  )
}
