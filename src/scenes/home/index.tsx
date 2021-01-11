import React, { useCallback } from 'react'
import { StatusBar, View } from 'react-native'
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated'
import { SceneContainer } from 'src/component/SceneContainer'
import { Routes } from 'src/navigation/Routes'

import { Background } from './Background'
import { examples } from './examples'
import { useSetContainerStyle } from './hooks/useSetContainerStyle'
import { Item } from './Item'
import { outerInset } from './sceneConfig'
import { styles } from './styles'

export const Home: React.FC<{}> = ({ navigation }: any) => {
  const scrollAnimation = useSharedValue<number>(0)
  const offsetY = useSharedValue<number>(0)

  const { containerStyle } = useSetContainerStyle()

  const onPress = useCallback(
    (route: Routes) => () => {
      navigation.push(route)
    },
    [navigation],
  )

  const scrollHandler = useAnimatedScrollHandler({
    onEndDrag: () => {
      scrollAnimation.value = withSpring(0, {
        damping: 10,
        mass: 2,
        stiffness: 200,
        velocity: 2,
      })
    },
    onMomentumEnd: () => {
      scrollAnimation.value = withSpring(0, {
        damping: 10,
        mass: 2,
        stiffness: 200,
        velocity: 2,
      })
    },
    onScroll: (event) => {
      scrollAnimation.value = withTiming(1, { duration: 200 })
      offsetY.value = event.contentOffset.y
    },
  })

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Background />
      <SceneContainer style={containerStyle} forceInset={outerInset}>
        <Animated.ScrollView
          style={styles.container}
          onScroll={scrollHandler}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={1}>
          {examples.map((item, index) => (
            <View style={styles.item} key={`${index}`}>
              <Item
                label={item.name}
                onPress={onPress(item.route)}
                scrollAnimation={scrollAnimation}
              />
            </View>
          ))}
        </Animated.ScrollView>
      </SceneContainer>
    </View>
  )
}
