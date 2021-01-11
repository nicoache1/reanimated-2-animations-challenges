import React from 'react'
import { Text, View } from 'react-native'
import Animated, {
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
} from 'react-native-reanimated'
import { ReText, round, Vector } from 'react-native-redash'

import { ETH } from '../ETH'
import { graphs } from '../Graph/graphsData'
import { SIZE } from '../types'
import { styles } from './styles'

interface HeaderProps {
  translation: Vector<Animated.SharedValue<number>>
  index: Animated.SharedValue<number>
}

export const Header: React.FC<HeaderProps> = ({ translation, index }) => {
  const data = useDerivedValue(() => graphs[index.value].data)

  const price = useDerivedValue(() => {
    const p = interpolate(
      translation.y.value,
      [0, SIZE],
      [data.value.maxPrice, data.value.minPrice],
    )
    // Doesnt work without the console
    // eslint-disable-next-line no-console
    console.log('here price', p)
    return `$ ${round(p, 2).toLocaleString('en-US', { currency: 'USD' })}`
  }, [translation, data])

  // This works fine
  // const [state, setstate] = useState(`${graphs[index.value].data.minPrice}`)

  // useAnimatedReaction(
  //   () => {
  //     const p = interpolate(
  //       translation.y.value,
  //       [0, SIZE],
  //       [data.value.maxPrice, data.value.minPrice],
  //     )
  //     return `$ ${round(p, 2).toLocaleString('en-US', { currency: 'USD' })}`
  //   },
  //   (x) => {
  //     runOnJS(setstate)(x)
  //   },
  // )

  const percentChange = useDerivedValue(() => {
    return `${round(data.value.percentChange, 3)}%`
  }, [data])

  const label = useDerivedValue(() => {
    return data.value.label
  }, [data, translation])

  const style = useAnimatedStyle(
    () => ({
      color: graphs[index.value].data.percentChange > 0 ? 'green' : 'red',
      fontSize: 24,
      fontWeight: '500',
    }),
    [data],
  )

  return (
    <View style={styles.container}>
      <ETH />
      <View style={styles.values}>
        <View>
          <ReText style={styles.value} text={price} />
          {/* <Text style={styles.value}>{state}</Text> */}
          <Text style={styles.label}>Etherum</Text>
        </View>
        <View>
          <ReText style={style} text={percentChange} />
          <ReText style={styles.label} text={label} />
        </View>
      </View>
    </View>
  )
}
