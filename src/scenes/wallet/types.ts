import { ImageSourcePropType } from 'react-native'
import Card1Image from 'src/assets/images/wallet/card1.png'
import Card2Image from 'src/assets/images/wallet/card2.png'
import Card3Image from 'src/assets/images/wallet/card3.png'

// eslint-disable-next-line no-shadow
export enum WALLET_STATES {
  EXPANDED = 0,
  SEMI_COLLAPSED = 1,
  COLLAPSED = 2,
}

export interface WalletItem {
  id: string
  image: ImageSourcePropType
}

export const CARD_SIZE = 250

export const Cards = [
  { id: '1', image: Card1Image },
  { id: '2', image: Card2Image },
  { id: '3', image: Card3Image },
]
