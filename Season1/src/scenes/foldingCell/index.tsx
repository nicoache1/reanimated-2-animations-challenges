import React, { useCallback, useEffect, useState } from 'react'
import { View } from 'react-native'
import { useSharedValue, withDelay, withTiming } from 'react-native-reanimated'

import { Cell } from './Cell'
import { InfoCard } from './InfoCard'
import { PhotoCard } from './PhotoCard'
import { ProfileCard } from './ProfileCard'
import { styles } from './styles'

interface FoldingCellProps {}

export const FoldingCell: React.FC<FoldingCellProps> = ({}) => {
  const [expand, setExpand] = useState(false)
  const progressFirstFold = useSharedValue<number>(0)
  const progressSecondFold = useSharedValue<number>(0)
  const progressThirdFold = useSharedValue<number>(0)

  useEffect(() => {
    if (expand) {
      progressFirstFold.value = withTiming(1, { duration: 300 })
      progressSecondFold.value = withDelay(
        200,
        withTiming(1, { duration: 300 }),
      )
      progressThirdFold.value = withDelay(400, withTiming(1, { duration: 300 }))
    } else {
      progressThirdFold.value = withTiming(0, { duration: 300 })
      progressSecondFold.value = withDelay(
        200,
        withTiming(0, { duration: 300 }),
      )
      progressFirstFold.value = withDelay(400, withTiming(0, { duration: 300 }))
    }
  }, [expand, progressFirstFold, progressSecondFold, progressThirdFold])

  const onPress = useCallback(() => {
    setExpand(!expand)
  }, [expand])

  return (
    <View style={styles.container}>
      <Cell
        progress={progressFirstFold}
        renderFront={<InfoCard onPress={onPress} />}
        renderBack={
          <ProfileCard
            progress={progressSecondFold}
            innerProgress={progressThirdFold}
            onPress={onPress}
          />
        }>
        <PhotoCard onPress={onPress} />
      </Cell>
    </View>
  )
}
