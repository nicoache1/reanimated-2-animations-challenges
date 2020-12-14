import { Dimensions, Platform, ScaledSize } from 'react-native'
import DeviceInfo from 'react-native-device-info'

export const isIphoneX = () => {
  const dimensions = Dimensions.get('window')

  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTV &&
    isIPhoneXorXsSize(dimensions)
  )
}

export const isIphone11 = () => {
  const dimensions = Dimensions.get('window')

  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTV &&
    isIPhone11orXrOrXsMaxSize(dimensions)
  )
}

export const isIPhoneXorXsSize = (dimensions: ScaledSize) =>
  dimensions.height === 812 || dimensions.width === 812

export const isIPhone11orXrOrXsMaxSize = (dimensions: ScaledSize) =>
  dimensions.height === 896 || dimensions.width === 896

export const isAndroid = () => Platform.OS === 'android'

export const isIOS = () => Platform.OS === 'ios'

export const isAndroidXOrNewer = () => isAndroid() && Platform.Version >= 29

export const isIOS13OrNewer = () =>
  isIOS() && Platform.Version.toString().includes('13')

export const isSimulator = () => isIOS() && DeviceInfo.isEmulatorSync()

export const isEmulator = () => isAndroid() && DeviceInfo.isEmulatorSync()

export const hasNotch = () => DeviceInfo.hasNotch()
