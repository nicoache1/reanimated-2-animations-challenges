import {
  StackCardInterpolatedStyle,
  StackCardInterpolationProps,
} from '@react-navigation/stack'

export const opacityTransition: object = {
  cardStyleInterpolator: ({ current }: { current: { progress: number } }) => ({
    cardStyle: {
      opacity: current.progress,
    }, // updates the opacity depending on the transition progress value of the current screen
  }), // we will swipe right if we want to close the screen;
  gestureDirection: 'horizontal',
  transitionSpec: {
    close: {
      animation: 'timing',
    },
    open: {
      animation: 'timing',
    },
  },
}

export const customModalTransition: object = {
  cardStyleInterpolator: ({
    current,
  }: StackCardInterpolationProps): StackCardInterpolatedStyle => ({
    cardStyle: {
      opacity: current.progress,
    }, // updates the opacity depending on the transition progress value of the current screen
  }), // we will swipe right if we want to close the screen;
  gestureDirection: 'horizontal',
  transitionSpec: {
    close: {
      animation: 'timing',
      config: {
        duration: 400,
      },
    },
    open: {
      animation: 'timing',
      config: {
        duration: 400,
      },
    },
  },
}
