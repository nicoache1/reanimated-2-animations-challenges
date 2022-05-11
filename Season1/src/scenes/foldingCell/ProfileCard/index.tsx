import React from 'react'
import { StyleSheet, TouchableHighlight, View } from 'react-native'
import Animated from 'react-native-reanimated'

import { AdditionalInfoCard } from '../AdditionalInfoCard'
import { BlackFace } from '../BlackFace'
import { Cell } from '../Cell'
import { FinalBackface } from '../FinalBackface'
import { ThickDarkGrayLine, ThinGrayLine } from '../Lines'
import { ProfileDetailCard } from '../ProfileDetailCard'

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#BDC2C9',
    height: 40,
    marginRight: 10,
    width: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  container: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'column',
  },
  flexible: {
    flex: 1,
  },
  footer: {
    flex: 1,
    flexDirection: 'column',
  },
  grayLineContainer: {
    flex: 1,
    padding: 16,
    paddingBottom: 10,
  },
})

interface ProfileCardProps {
  progress: Animated.SharedValue<number>
  innerProgress: Animated.SharedValue<number>
  onPress: () => void
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  progress,
  innerProgress,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.flexible}>
        <View style={styles.grayLineContainer}>
          <ThinGrayLine width={120} />
          <View style={styles.buttonContainer}>
            <TouchableHighlight>
              <View style={styles.buttonContainer} />
            </TouchableHighlight>
            <View style={styles.footer}>
              <ThickDarkGrayLine width={200} />
              <ThinGrayLine width={120} />
            </View>
          </View>
        </View>

        <View style={styles.flexible}>
          <Cell
            layoutHeight={100}
            progress={progress}
            renderFront={<BlackFace title={'front 1'} />}
            renderBack={
              <View style={styles.flexible}>
                <Cell
                  layoutHeight={100}
                  progress={innerProgress}
                  renderFront={<BlackFace title={'front 2'} />}
                  renderBack={<FinalBackface onPress={onPress} />}>
                  <AdditionalInfoCard />
                </Cell>
              </View>
            }>
            <ProfileDetailCard />
          </Cell>
        </View>
      </View>
    </View>
  )
}
