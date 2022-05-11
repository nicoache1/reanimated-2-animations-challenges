import React from 'react'
import { StyleSheet, View } from 'react-native'

import { PaperSwitchCard } from './PaperSwitchCard'

interface PaperSwitchProps {}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
})

export const PaperSwitch: React.FC<PaperSwitchProps> = ({}) => {
  return (
    <View style={styles.container}>
      <PaperSwitchCard
        backgroundColor={'rgb(0, 192, 89)'}
        title={'Connect Contacts'}
        subtitle={
          'All your phone Contacts with be automatically\nadded to your friends list'
        }
      />
      <PaperSwitchCard
        backgroundColor={'rgb(72,202,228)'}
        title={'Allow Discovery'}
        subtitle={
          "Turn on to allow your phone number to be displayed in your friend's Contacts"
        }
      />
    </View>
  )
}
