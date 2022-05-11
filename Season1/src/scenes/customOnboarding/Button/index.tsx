import React from 'react'
import { StyleProp, StyleSheet, Text, ViewStyle } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Animated from 'react-native-reanimated'

interface LayoutProps {
  onPress: () => void
  text: string
  backgroundColor: StyleProp<ViewStyle>
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 10,
    height: 54,
    justifyContent: 'center',
    width: 300,
  },
  text: {
    color: '#FFFFFF',
    fontFamily: 'Ridley Grotesk Bold',
    fontSize: 16,
  },
})

export const Button: React.FC<LayoutProps> = ({
  onPress,
  backgroundColor,
  text,
}) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <Animated.View style={[styles.button, backgroundColor]}>
      <Text style={styles.text}>{text}</Text>
    </Animated.View>
  </TouchableWithoutFeedback>
)
