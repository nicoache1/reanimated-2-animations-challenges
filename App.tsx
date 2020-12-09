import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { navigationRef } from 'src/common/navigation'
import { AppContainer } from 'src/navigation'

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <AppContainer />
    </NavigationContainer>
  )
}

export default App
