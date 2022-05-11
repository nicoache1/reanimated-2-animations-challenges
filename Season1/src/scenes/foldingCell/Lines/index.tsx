import React from 'react'
import { StyleProp, TouchableHighlight, View, ViewStyle } from 'react-native'

interface LineProps {
  onPress?: () => void
  style?: StyleProp<ViewStyle>
}

const Line: React.FC<LineProps> = ({ style, onPress }) => {
  if (onPress) {
    return (
      <TouchableHighlight
        style={[
          {
            borderRadius: 2,
            marginBottom: 10,
          },
          style,
        ]}
        onPress={onPress}>
        <View />
      </TouchableHighlight>
    )
  }

  return (
    <View
      style={[
        {
          marginBottom: 10,
        },
        style,
      ]}
    />
  )
}

interface ThinLineProps {
  color: string
  width: number
  props?: object
}

const ThinLine: React.FC<ThinLineProps> = ({ color, width = 60, ...props }) => (
  <Line
    style={{
      backgroundColor: color,
      height: 10,
      width,
    }}
    {...props}
  />
)

const ThickLine: React.FC<ThinLineProps> = ({
  color,
  width = 70,
  ...props
}) => (
  <Line
    style={{
      backgroundColor: color,
      height: 20,
      width,
    }}
    {...props}
  />
)

export const ThinGrayLine = (props: any) => (
  <ThinLine color={'#BDC2C9'} {...props} />
)

export const ThickGrayLine = (props: any) => (
  <ThickLine color={'#BDC2C9'} {...props} />
)

export const ThickWhiteLine = (props: any) => (
  <ThickLine color={'#FFFFFF'} {...props} />
)

export const ThickDarkGrayLine = (props: any) => (
  <ThickLine color={'#33373B'} {...props} />
)

export const ThinRedLine = (props: any) => (
  <ThinLine color={'#DB0000'} {...props} />
)
