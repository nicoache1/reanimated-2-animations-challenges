import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

type ParamList = Record<string, object | undefined>
type Route = keyof ParamList

export type ScreenRouteProp<T extends ParamList, R extends Route> = RouteProp<
  T,
  R
>

export type ScreenNavigationProp<
  T extends ParamList,
  R extends Route
> = StackNavigationProp<T, R>

export type SceneProps<P extends ParamList, R extends Route> = {
  route: ScreenRouteProp<P, R>
  navigation: ScreenNavigationProp<P, R>
}
